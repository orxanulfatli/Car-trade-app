import { CAR_ACTION_CONSTANTS } from "./action.constants";
import { addCar, getCarDetails, getCars } from "../../services/carService";

export const addCarAC = (data) => async (dispatch) => {
  try {
    dispatch({ type: CAR_ACTION_CONSTANTS.NEW_CAR_REQUEST });
    const response = await addCar(data);
    
    dispatch({
      type: CAR_ACTION_CONSTANTS.NEW_CAR_SUCCESS,
      payload: response.data.message,
    });
  } catch (error) {
    dispatch({
      type: CAR_ACTION_CONSTANTS.NEW_CAR_FAIL,
      payload: error?.response?.data?.message || error,
    });
  } 
};


export const getCarsAC = () => async (dispatch) => {
  try {
    dispatch({ type: CAR_ACTION_CONSTANTS.GET_CARS_REQUEST });
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
  } 
};

export const getCarDetailsAC = (payload) =>async (dispatch) => {
  try {
    console.log(payload)
    dispatch({ type: CAR_ACTION_CONSTANTS.GET_CAR_DETAIL_REQUEST })
    const response = await getCarDetails(payload)
    const { car } = response.data
    
    dispatch({type:CAR_ACTION_CONSTANTS.GET_CAR_DETAIL_SUCCESS,payload:car})
  } catch (error) {
    dispatch({
      type: CAR_ACTION_CONSTANTS.GET_CAR_DETAIL_FAIL,
      payload: error?.response?.data || error.message,

    })
  } 
  
}






