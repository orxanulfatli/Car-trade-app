import $api from "./config"
import { ADD_CAR_URL,  GET_CARS_URL, GET_CAR_DETAIL } from "./service.constants"
import  axios  from 'axios';

export const addCar = (data) => {
  return  $api.post(ADD_CAR_URL,data)
}

export const getCars = () => {
  return axios.get(GET_CARS_URL)
}

export const getCarDetails = (id) => {
  return axios.get(`${GET_CAR_DETAIL}/${id}`)
};