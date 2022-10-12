import $api from "./config";
import {
  LOGIN_URL,
  REFRESH_URL,
  VERIFY_URL,
} from "./service.constants";
import axios from "axios";

export const login = (email) => $api.post(LOGIN_URL, { email });
export const verify = (email, otp) => $api.post(VERIFY_URL, { email, otp });

//in this case i use default instance axios,
//because i dont need request interceptor
export const checkAuth =  () => axios.get(REFRESH_URL,{withCredentials:true});
