import { useState, useEffect } from "react";
import axios from "axios";
import * as Location from "expo-location";

const fetchQualityOfWater = async (platform_id) => {
  console.log("abc", platform_id);
  if (!platform_id) return;
  console.log("ikk");

  const options = {
    method: "GET",
    url: `http://www.ipacoa.org/ssa/get_recent_measurements.php?sid=0.5844246126371893&platform_label=${platform_id}`,
    headers: {},
  };
  try {
    console.log("Opt: ", options);
    const response = await axios.request(options);
    console.log("Resp", response["data"]);
    return response["data"];
    setData(response["data"]["data"][0]["coordinates"][0]["dates"][0]["value"]);
  } catch (error) {
    console.log(error);
  }
};

const useQualityOfWater = ({ platform_id }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default fetchQualityOfWater;
