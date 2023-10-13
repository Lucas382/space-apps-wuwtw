import { useState, useEffect } from "react";
import axios from "axios";
import * as Location from "expo-location";

const useBaciaData = () => {
  const [data, setData] = useState([
    {
      "código Otto": 6794,
      "nome da bacia hidrográfica": "Bacia do Rio Ribeira",
      "nome do curso principal": "Rio Ribeira",
      "principais Afluentes":
        "Rio Jacupiranga, Rio Pardo e Rio Capivari, Rio Juquiá",
      "sub-bacias hidrográficas":
        "Bacia Pardo-Capivari, Bacia do Rio Juquiá, Bacia do Rio Jacupiranga",
      "suprabacia(s)": "",
      latitude: -24.694645,
      longitude: -48.691783,
    },

    {
      "código Otto": 6862,
      "nome da bacia hidrográfica": "Bacia do Rio Iguaçu",
      "nome do curso principal": "Rio Iguaçu",
      "principais Afluentes": "Rio Jordão, Rio Timbó, Rio Chopim",
      "sub-bacias hidrográficas":
        "Bacia do Rio Timbó, Bacia do Rio Chopim, Bacia do Rio Jordão",
      "suprabacia(s)": "Bacia do Rio da Prata e Bacia do Rio Paraná",
      latitude: -25.969108,
      longitude: -51.81554,
    },
  ]);

  return { data };
};

export default useBaciaData;
