import { useEffect, useState } from "react";
import { API_KEY } from "../api-key.js";

let cachedData;
let cachedTime = new Date();

export const useFindLocation = () => {
  const [res, setRes] = useState(null);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);

  const time = new Date();

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        let spotsResponse;

        if (!cachedData || time - cachedTime > 60000) {
          spotsResponse = await fetch(
            `https://api.kierratys.info/collectionspots/?api_key=${API_KEY}&limit=500`, {headers: {
              
            }}
          );
          cachedData = spotsResponse;
          cachedTime = new Date();
        } else {
          spotsResponse = cachedData;
        }

        const spotsData = await spotsResponse.json();

        if (spotsData.count > 0) {
          setRes(spotsData);
        } else {
          setRes("Your city does not have spots");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selected]);

  return [res, selected, setSelected, loading];
};
