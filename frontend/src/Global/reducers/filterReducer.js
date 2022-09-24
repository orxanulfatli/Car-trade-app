import { FILTER_CARS } from "../actions/action.constants";

const initState = {
  filteredCars: null,
};

export const filterReducer = (state = initState, action) => {
    const { type, payload } = action;
   
    
  switch (type) {
      case FILTER_CARS:
           const { cars, query } = payload;
           const rangeQuery = {
             minCost: query.minCost || 0,
             maxCost: query.maxCost || 3000000,
             currency: query.currency,
             minRelease: query.minRelease || 0,
             maxRelease: query.maxRelease || new Date().getFullYear(),
           };
           const filteredCars = cars.filter((car) => {
             return Object.entries(query).every(([key, value]) => {
               let condition =
                 value &&
                 !key.includes("min") &&
                 !key.includes("max") &&
                 !key.includes("currency");
               if (condition) {
                 return car[key] === value;
               }
               return true;
             });
           });
             const filteredCarsByRange = filteredCars.filter((car) => {
               return (
                 parseInt(car.price?.cost) <= parseInt(rangeQuery.maxCost) &&
                 parseInt(car.price?.cost) >= parseInt(rangeQuery.minCost) &&
                 (rangeQuery.currency
                   ? car.price.currency === rangeQuery.currency.toLowerCase()
                   : true) &&
                 parseInt(car.release) <= parseInt(rangeQuery.maxRelease) &&
                 parseInt(car.release) >= parseInt(rangeQuery.minRelease)
               );
             });
      return { ...state, filteredCars: filteredCarsByRange };

    default:
      return state;
  }
};
