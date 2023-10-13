import { useState, useEffect } from "react";
import axios from "axios";
import * as Location from "expo-location";

const getCurrentTime = () => {
  const now = new Date();

  // Get the current date in the desired format
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  // Get the current time in the desired format
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Get the current timezone offset in minutes and format it as +/-HH:MM
  const timezoneOffset = -now.getTimezoneOffset();
  const timezoneOffsetHours = String(Math.floor(timezoneOffset / 60)).padStart(
    2,
    "0"
  );
  const timezoneOffsetMinutes = String(timezoneOffset % 60).padStart(2, "0");
  const timezoneOffsetString = `${
    timezoneOffset >= 0 ? "+" : "-"
  }${timezoneOffsetHours
    .replace("-", "")
    .padStart(2, "0")}:${timezoneOffsetMinutes}`;

  console.log("of: ", timezoneOffsetString);
  console.log("h: ", timezoneOffsetHours);

  // Combine the date, time, and timezone offset
  const formattedTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000${timezoneOffsetString}`;

  return formattedTime;
};

const useMeteoFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const currentTime = getCurrentTime();
    console.log("Loc:", location);
    const latitude = location["coords"]["latitude"];
    const longitude = location["coords"]["longitude"];

    const options = {
      method: "GET",
      url: `https://spaceenginners_santos_gustavo:FB5if2vdZ7@api.meteomatics.com/${currentTime}/t_0m:C/${latitude},${longitude}/json?model=mix`,
      headers: {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        Authorization:
          "Basic c3BhY2Vlbmdpbm5lcnNfc2FudG9zX2d1c3Rhdm86RkI1aWYydmRaNw==",
      },
    };
    try {
      console.log("Opt: ", options);
      const response = await axios.request(options);
      console.log(
        "Resp",
        response["data"]["data"][0]["coordinates"][0]["dates"][0]["value"]
      );
      setData(
        response["data"]["data"][0]["coordinates"][0]["dates"][0]["value"]
      );
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useMeteoFetch;
