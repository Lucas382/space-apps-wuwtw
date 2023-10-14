import { useState, useEffect } from "react";
import axios from "axios";
import * as Location from "expo-location";

const usePlatforms = () => {
  const platformIds = [
    { id: "APL_Chaba", t: 1697145420 },
    { id: "APSH_Seward1", t: 1604952718 },
    { id: "CARLSBD_Aquafarm1", t: 1586257224 },
    { id: "cencoos_Carquinez", t: 1564502487 },
    { id: "cencoos_Humboldt", t: 1656331200 },
    { id: "cencoos_Tiburon", t: 1564505346 },
    { id: "cencoos_Trinidad", t: 1656374400 },
    { id: "FBO_Fannybay1", t: 1633876214 },
    { id: "HAKAI_KCBuoy", t: 1693648800 },
    { id: "HAKAI_Quadra1", t: 1690395033 },
    { id: "HIOC_Hogisland1", t: 1539810041 },
    { id: "KC_SEAQYSI", t: 1697237100 },
    { id: "NDBC_46041", t: 1697243400 },
    { id: "NERRS_elkapwq", t: 1674572400 },
    { id: "NERRS_elksmwq", t: 1674573300 },
    { id: "NERRS_elkvmwq", t: 1673037000 },
    { id: "NERRS_job09wq", t: 1617117300 },
    { id: "NERRS_job20wq", t: 1611589500 },
    { id: "NERRS_kachdwq", t: 1667513700 },
    { id: "NERRS_kacsdwq", t: 1674575100 },
    { id: "NERRS_pdbbpwq", t: 1674573300 },
    { id: "NERRS_pdbbywq", t: 1674575100 },
    { id: "NERRS_sfbccwq", t: 1674573300 },
    { id: "NERRS_sfbfmwq", t: 1613673000 },
    { id: "NERRS_sfbgcwq", t: 1674574200 },
    { id: "NERRS_sfbsmwq", t: 1674574200 },
    { id: "NERRS_soschwq", t: 1552094100 },
    { id: "NERRS_sosvawq", t: 1608464700 },
    { id: "NERRS_soswiwq", t: 1674573300 },
    { id: "NERRS_tjroswq", t: 1674574200 },
    { id: "OCAL_Ketchikan1", t: 1651185579 },
    { id: "ORCA_Dabobbay", t: 1697145420 },
    { id: "ORCA_Twanoh", t: 1697145420 },
    { id: "OSU_CB06", t: 1694121420 },
    { id: "OSU_NH10", t: 1492895820 },
    { id: "PCS_Penncove1", t: 1565013600 },
    { id: "PMELCO2_155w0", t: 1697123820 },
    { id: "PMELCO2_165e0", t: 1697123820 },
    { id: "PMELCO2_165e8s", t: 1697177820 },
    { id: "PMELCO2_170w", t: 1697188620 },
    { id: "PMELCO2_alawai", t: 1613585820 },
    { id: "PMELCO2_cce1", t: 1697069820 },
    { id: "PMELCO2_cce2", t: 1697145420 },
    { id: "PMELCO2_cheeca", t: 1697145420 },
    { id: "PMELCO2_chuukk1", t: 1697145420 },
    { id: "PMELCO2_coastalla", t: 1697123820 },
    { id: "PMELCO2_coastalms", t: 1496092620 },
    { id: "PMELCO2_crescent", t: 1558311420 },
    { id: "PMELCO2_crimp", t: 1697134620 },
    { id: "PMELCO2_firstlanding", t: 1675793820 },
    { id: "PMELCO2_gakoa", t: 1697134620 },
    { id: "PMELCO2_HogReef", t: 1544800620 },
    { id: "PMELCO2_kaneohe", t: 1697156220 },
    { id: "PMELCO2_kilonalu", t: 1499300220 },
    { id: "PMELCO2_kodiak", t: 1460927820 },
    { id: "PMELCO2_laparguera", t: 1697156220 },
    { id: "PMELCO2_m2", t: 1697145420 },
    { id: "PMELCO2_ndbcga", t: 1697145420 },
    { id: "PMELCO2_nh", t: 1697145420 },
    { id: "PMELCO2_papa", t: 1697167020 },
    { id: "PMELCO2_seak", t: 1454523420 },
    { id: "PMELCO2_whots", t: 1697156220 },
    { id: "PSI_Baycenter", t: 1571760642 },
    { id: "STA_Sitka1", t: 1694640972 },
    { id: "TAF_Dabobbay", t: 1571950796 },
    { id: "WCSH_Whiskey1", t: 1569085385 },
  ];

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    const data = await Promise.all(
      platformIds.map(async (id) => {
        const options = {
          method: "GET",
          url: `http://127.0.0.1:8000/platform_data?platform_id=${id}`,
          accept: "application/json",
        };
        try {
          const response = await axios.request(options);
          return response["data"];
        } catch (error) {
          console.log(error);
        }
      })
    );

    console.log(data);

    setIsLoading(false);
    setData(data);
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
