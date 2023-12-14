import React from 'react';
import { useParams } from 'react-router-dom';
import { useFindLocation } from '../../consts/hooks/useFindLocation';

const Spot = () => {
  const [result, selected, setSelected, loading] = useFindLocation();

  const {id} = useParams();

  const item = result?.results.find(item => item.spot_id == id)

  console.log(result);

  return (
    <div>
      {item?.name}
      <br/>
      {item?.address}
      <br/>
      {item?.postal_code}
      <br/>
      {item?.municipality}
    </div>
  );
};

export default Spot;