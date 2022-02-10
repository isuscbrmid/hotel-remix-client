import { Fragment, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Index = (): JSX.Element => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/bookings');
  }, []);
  return (
    <Fragment />
  );
};

export default Index;
