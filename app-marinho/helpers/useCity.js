import { useState, useEffect } from "react";
import axios from "axios";
import * as Location from "expo-location";

const useCityName = () => {
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
    console.log("Loc:", location);
    const latitude = location["coords"]["latitude"];
    const longitude = location["coords"]["longitude"];

    const options = {
      method: "GET",
      url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBokcoHClMbw2hbQ1wr1T67jgPCMndf7Kw`,
    };
    try {
      console.log("Opt: ", options);
      const response = await axios.request(options);
      console.log(
        "Resp",
        response["data"]["results"][0]["address_components"][3]["long_name"]
      );
      setData(
        response["data"]["results"][0]["address_components"][3]["long_name"]
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

export default useCityName;
