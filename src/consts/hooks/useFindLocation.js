import { useEffect, useState } from "react";

export const useFindLocation = () => {
  const [info, setInfo] = useState(null);
  const [res, setRes] = useState(null);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((data) => data.json())
      .then((c) => setInfo(c))
      .then(() => {
        fetch(`https://api.kierratys.info/collectionspots/?api_key=1088873da4e98f7edfa6db96ddc01c57c7ea9365&limit=2000`)
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
