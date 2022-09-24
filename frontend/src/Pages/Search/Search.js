import React from "react";
import { useEffect } from "react";
import { useSearchParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  getCarsAC } from "../../Global/actions/carActions";
import CarCard from "../../components/CarCard/CarCard";
import List from "../../components/List/List";
import { filterCarsAC } from "../../Global/actions/filterActions";

const Search = () => {
  const [searchparams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.car);
    const { filteredCars } = useSelector((state) => state.filter);


  // for (let property of searchparams.entries()) {
  //   console.log(property[0], property[1]);
  // }
  const query = Object.fromEntries(
    [...searchparams].filter((item, index) => {
      return item[0] !== "";
    })
  );
  useEffect(() => {
    dispatch(getCarsAC());
  }, []);
  useEffect(() => {
    if (cars) {
      dispatch(filterCarsAC({cars,query}));
    }
  }, [cars]);
  return (
    <>
      {filteredCars && (
        <List
          items={filteredCars}
          renderItems={(car) => (
            <CarCard
              key={car?._id}
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
      )}
    </>
  );
};

export default Search;
