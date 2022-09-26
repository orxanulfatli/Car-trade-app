import React, { useEffect } from "react";
import Searchbar from "../../Layout/Components/Searchbar/Searchbar";
import { getCarsAC } from "../../Global/actions/carActions";
import { useDispatch, useSelector } from "react-redux";
import CarCard from "../../components/CarCard/CarCard";
import List from "../../components/List/List";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { REACT_APP_DEV_API, REACT_APP_PROD_API } = process.env;
  console.log(REACT_APP_DEV_API,'s');
  const { cars } = useSelector((state) => state.car);
  useEffect(() => {
    dispatch(getCarsAC());
  }, [dispatch]);
  return (
    <>
      <Searchbar />

      <List
        items={cars}
        renderItems={(car) => (
          <CarCard
            key={car._id}
            id={car._id}
            front={car?.image?.front}
            credit={car.credit}
            barter={car.barter}
            price={car.price}
            mark={car.mark}
            release={car.release}
            engineCapacity={car.engineCapacity}
            kmsDriven={car.kmsDriven}
          />
        )}
      />
    </>
  );
};

export default Home;
