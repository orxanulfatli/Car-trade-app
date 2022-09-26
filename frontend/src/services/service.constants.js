

const devEnv = process.env.NODE_ENV !== 'production'
const { REACT_APP_DEV_API, REACT_APP_PROD_API } = process.env;

export const API_URL = devEnv ? REACT_APP_DEV_API : REACT_APP_PROD_API;
export const LOGIN_URL = "signin";
export const VERIFY_URL = "verify";
export const REFRESH_URL = "refresh";
export const GET_USER_URL = "user";
export const ADD_CAR_URL = "addcar"
export const GET_CARS_URL = "getCars";
export const GET_CAR_DETAIL = "carDetails";
