import $api from "./config";
import {GET_USER_URL} from './service.constants'

export const getUser = () => $api.get(GET_USER_URL)