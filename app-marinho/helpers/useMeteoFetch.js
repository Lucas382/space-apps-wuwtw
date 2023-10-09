import { useState, useEffect } from "react";
import axios from "axios";

const useMeteoFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [options, setOptions] = useState({
    method: "GET",
    url: "",
    headers: {},
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setOptions({
        method: "GET",
        url: `https://spaceenginners_santos_gustavo:FB5if2vdZ7@api.meteomatics.com/${currentTime}/t_0m:C/${location.latitude},${location.longitude}/json?model=mix`,
        headers: {},
      });
    })();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    if (!!options.url) return;

    try {
      console.log(options);
      const response = await axios.request(options);
      console.log(response);

      setData(response.data.data);
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
