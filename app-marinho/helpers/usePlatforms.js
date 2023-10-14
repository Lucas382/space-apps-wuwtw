import { useState, useEffect } from "react";
import axios from "axios";
import * as Location from "expo-location";

const usePlatforms = () => {
  const [data, setData] = useState([
    {
      id: "APSH_Seward1",
      lat: 60.0992,
      type: "Fixed Shore Platform",
      lon: -149.4428,
      name: "AOOS Alutiiq Burkolator",
      index: 0,
    },
  ]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const fetchData = async () => {
  //   setIsLoading(true);
  //   let { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status !== "granted") {
  //     return;
  //   }

  //   let location = await Location.getCurrentPositionAsync({});
  //   const currentTime = getCurrentTime();
  //   console.log("Loc:", location);
  //   const latitude = location["coords"]["latitude"];
  //   const longitude = location["coords"]["longitude"];

  //   const options = {
  //     method: "GET",
  //     url: `https://spaceenginners_santos_gustavo:FB5if2vdZ7@api.meteomatics.com/${currentTime}/t_0m:C/${latitude},${longitude}/json?model=mix`,
  //     headers: {
  //       Accept:
  //         "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  //       Authorization:
  //         "Basic c3BhY2Vlbmdpbm5lcnNfc2FudG9zX2d1c3Rhdm86RkI1aWYydmRaNw==",
  //     },
  //   };
  //   try {
  //     console.log("Opt: ", options);
  //     const response = await axios.request(options);
  //     console.log(
  //       "Resp",
  //       response["data"]["data"][0]["coordinates"][0]["dates"][0]["value"]
  //     );
  //     setData(
  //       response["data"]["data"][0]["coordinates"][0]["dates"][0]["value"]
  //     );
  //     setIsLoading(false);
  //   } catch (error) {
  //     setError(error);
  //     console.log(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return {
    data,
    // isLoading, error, refetch
  };
};

export default usePlatforms;
