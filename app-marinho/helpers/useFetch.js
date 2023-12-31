import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, deps) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: url,
    headers: {},
  };

  const fetchData = async () => {
    setIsLoading(true);
    console.log(deps);
    if (!deps) return;

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
  }, [deps]);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
