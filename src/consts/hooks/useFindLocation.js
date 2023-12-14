import { useEffect, useState } from "react";
import {API_KEY} from '../api-key.js'
export const useFindLocation = () => {
  const [info, setInfo] = useState(null);
  const [res, setRes] = useState(null);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((data) => data.json())
      .then((c) => setInfo(c))
      .then(() => {
        fetch(`https://api.kierratys.info/collectionspots/?api_key=${API_KEY}&limit=2000`)

          .then((data) => data.json())
          .then((c) =>
            c.count > 0
              ? setRes(c)
              : setRes("Your city does not have spots")
          ).then(console.log(res));
      })
      .catch((error) => console.log(error));
  }, []);
  
  return [info, res]
};
