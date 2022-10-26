import { AUTH_ACTION_CONSTANTS } from "../actions/action.constants";

const initState = {
  isLoading: true,
  error: null,
  isOtp: false,
  email: null,
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case AUTH_ACTION_CONSTANTS.SET_LOADING:
      return { ...state, isLoading: payload };
    case AUTH_ACTION_CONSTANTS.LOGIN:
      return {
        ...state,
        isOtp: true,
        email: payload,
        error: null,
      };
    case AUTH_ACTION_CONSTANTS.AUTH:
      return { ...state, isAuth: true, error: null };
   
    case AUTH_ACTION_CONSTANTS.SET_API_ERROR:
      return { ...state, error: payload, isAuth: false };
    default:
      return state;
  }
};
