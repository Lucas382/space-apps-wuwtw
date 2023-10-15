import { useState, useEffect } from "react";
import axios from "axios";
import * as Location from "expo-location";
import api from "./useApi";

const usePlatforms = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const apiUrl = "/dados_plataforma/";

      const response = await api.get(apiUrl);

      if (response.status == 200) {
        const data = response.data;
        // console.log(data);
        setData(data);
      } else {
        console.error("Erro ao fazer a solicitação à API.");
      }
    } catch (error) {
      console.error("Ocorreu um erro ao consumir a API:", error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};

export default usePlatforms;
