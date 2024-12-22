import { useParams } from 'react-router-dom';
import DetailView from '../views/DetailView';
import { useEffect, useState } from 'react';
import Model from '../models/DetailModel';

const DetailController = () => {
  const [coin, setCoin] = useState(null);

  // 1) Get the ID from the URL
  const { id } = useParams();

  // 2) Fetch the coin's detail data and price history
  useEffect(() => {
    Model.getCoin(id).then((res) => setCoin(res));
  }, []);

  const model = new Model(coin);

  return <DetailView model={model} />;
};

export default DetailController;
