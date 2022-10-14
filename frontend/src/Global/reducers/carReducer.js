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
    case CAR_ACTION_CONSTANTS.NEW_CAR_REQUEST:
    case CAR_ACTION_CONSTANTS.GET_CARS_REQUEST:
    case CAR_ACTION_CONSTANTS.GET_CAR_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
        
      };

    case CAR_ACTION_CONSTANTS.NEW_CAR_FAIL:
    case CAR_ACTION_CONSTANTS.GET_CARS_FAIL:
    case CAR_ACTION_CONSTANTS.GET_CAR_DETAIL_FAIL:
      return {
        ...state,
        isLoading:false,
        error: payload,
      };
    case CAR_ACTION_CONSTANTS.NEW_CAR_SUCCESS:
      return {
        ...state,
        success: true,
        isLoading: false,
      };
    case CAR_ACTION_CONSTANTS.NEW_CAR_RESET:
      return {
        ...state,
        success:false
      }
    case CAR_ACTION_CONSTANTS.GET_CARS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cars: payload,
      };
    case CAR_ACTION_CONSTANTS.GET_CAR_DETAIL_SUCCESS:
      let { image } = payload;
      const imageList = Object.keys(image).reduce((prev, key) => {
        if (key === "other") {
          prev = prev.concat(image[key]);
        } else {
          prev.push(image[key]);
        }
        return prev;
      }, []);
      return {
        ...state,
        isLoading:false,
        carDetails: { ...payload, image: imageList }
      };
    case CAR_ACTION_CONSTANTS.CLEAR_ERROR:
      return {
        ...state,
        error:null
      }
    default:
      return state;
  }
};
