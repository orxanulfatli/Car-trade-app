import { object } from "yup";
import { CAR_ACTION_CONSTANTS } from "./../actions/action.constants";

const initState = {
  isLoading: false,
  error: null,
  cars: null,
  carDetails: null,
};
export const carReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case CAR_ACTION_CONSTANTS.ADD_CAR_REQUEST:
    case CAR_ACTION_CONSTANTS.GET_CARS_REQUEST:
    case CAR_ACTION_CONSTANTS.GET_CAR_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: payload,
        error: null,
      };

    case CAR_ACTION_CONSTANTS.ADD_CAR_FAIL:
    case CAR_ACTION_CONSTANTS.GET_CARS_FAIL:
    case CAR_ACTION_CONSTANTS.GET_CAR_DETAIL_FAIL:
      return {
        ...state,
        error: payload,
      };
    case CAR_ACTION_CONSTANTS.ADD_CAR_SUCCESS:
      return {
        ...state,
        error: null,
        success:true
      };
    case CAR_ACTION_CONSTANTS.GET_CARS_SUCCESS:
      return {
        ...state,
        cars: payload,
        error: null,
      };
    case CAR_ACTION_CONSTANTS.GET_CAR_DETAIL_SUCCESS:
      let { image } = payload;
      const imageList = Object.keys(image).reduce((prev, key) => {
        if (key === "other") {
          prev=prev.concat(image[key])
        } else {
          prev.push(image[key]);
        }
        return prev;
      }, []);
      return {
        ...state,
        carDetails: { ...payload, image: imageList },
        error: null,
      };

    default:
      return state;
  }
};
