import React, { useEffect } from "react";
import Searchbar from "../../Layout/Components/Searchbar/Searchbar";
import { getCarsAC } from "../../Global/actions/carActions";
import { useDispatch, useSelector } from "react-redux";
import CarCard from "../../components/CarCard/CarCard";
import List from "../../components/List/List";

const Home = () => {
  const dispatch = useDispatch();
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
