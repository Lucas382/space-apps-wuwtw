import { useState, useEffect } from "react";
import axios from "axios";
import * as Location from "expo-location";

const useLocation = () => {
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

    setIsLoading(false);
    setData({ latitude: latitude, longitude: longitude });
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

export default useLocation;
