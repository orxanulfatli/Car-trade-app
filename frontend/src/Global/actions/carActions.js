import { CAR_ACTION_CONSTANTS } from "./action.constants";
import { addCar, getCarDetails, getCars } from "../../services/carService";

export const addCarAC = (data) => async (dispatch) => {
  try {
    dispatch({ type: CAR_ACTION_CONSTANTS.ADD_CAR_REQUEST, payload: true });
    const response = await addCar(data);
    dispatch({
      type: CAR_ACTION_CONSTANTS.ADD_CAR_SUCCESS,
      payload: response.data.message,
    });
  } catch (error) {
    dispatch({
      type: CAR_ACTION_CONSTANTS.ADD_CAR_FAIL,
      payload: error?.response?.data?.message || error,
    });
  } finally {
    dispatch({ type: CAR_ACTION_CONSTANTS.ADD_CAR_REQUEST, payload: false });
  }
};

export const getCarsAC = () => async (dispatch) => {
  try {
    dispatch({ type: CAR_ACTION_CONSTANTS.GET_CARS_REQUEST, payload: true });
    const response = await getCars();
    const { cars } = response.data
    dispatch({
      type: CAR_ACTION_CONSTANTS.GET_CARS_SUCCESS,
      payload: cars,
    });
  } catch (error) {
    dispatch({
      type: CAR_ACTION_CONSTANTS.GET_CARS_FAIL,
      payload: error?.response?.data || error.message,
    });
  } finally {
    dispatch({ type: CAR_ACTION_CONSTANTS.GET_CARS_REQUEST, payload: false });
  }
};

export const getCarDetailsAC = (payload) =>async (dispatch) => {
  try {
    console.log(payload)
    dispatch({ type: CAR_ACTION_CONSTANTS.GET_CAR_DETAIL_REQUEST, payload: true })
    const response = await getCarDetails(payload)
    const { car } = response.data
    console.log("car", car);
    
    dispatch({type:CAR_ACTION_CONSTANTS.GET_CAR_DETAIL_SUCCESS,payload:car})
  } catch (error) {
    dispatch({
      type: CAR_ACTION_CONSTANTS.GET_CAR_DETAIL_FAIL,
      payload: error?.response?.data || error.message,

    })
  } finally {
    dispatch ({type:CAR_ACTION_CONSTANTS.GET_CAR_DETAIL_REQUEST,payload:false})
  }
  
}



