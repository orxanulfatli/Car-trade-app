import { checkAuth, login, verify } from "../../services/authService";
import { AUTH_ACTION_CONSTANTS } from "./action.constants";
import { loadState, saveState } from "../../utils/localStorage";

export const loginAC = (email) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_ACTION_CONSTANTS.SET_LOADING, payload: true });
    await login(email);
    dispatch({ type: AUTH_ACTION_CONSTANTS.LOGIN, payload: email });
  } catch (error) {
    dispatch({
      type: AUTH_ACTION_CONSTANTS.SET_API_ERROR,
      payload: error?.response?.data?.message,
    });
  } finally {
    dispatch({ type: AUTH_ACTION_CONSTANTS.SET_LOADING, payload: false });
  }
};

export const verifyAC = (email, otp, from, navigate) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_ACTION_CONSTANTS.SET_LOADING, payload: true });
    const response = await verify(email, otp);
    saveState("token", response.data.accessToken);
    dispatch({ type: AUTH_ACTION_CONSTANTS.AUTH });
    navigate(from, { replace: true });
  } catch (error) {
    dispatch({
      type: AUTH_ACTION_CONSTANTS.SET_API_ERROR,
      payload: error?.response?.data?.message,
    });
  } finally {
    dispatch({ type: AUTH_ACTION_CONSTANTS.SET_LOADING, payload: false });
  }
};

export const checkAuthAC = () => async (dispatch) => {
  try {
    dispatch({ type: AUTH_ACTION_CONSTANTS.SET_LOADING, payload: true });
    const response = await checkAuth();
    saveState("token", response.data.accessToken);
    dispatch({ type: AUTH_ACTION_CONSTANTS.AUTH });
  } catch (error) {
    dispatch({
      type: AUTH_ACTION_CONSTANTS.SET_API_ERROR,
      payload: error?.response?.data?.message,
    });
  } finally {
    dispatch({ type: AUTH_ACTION_CONSTANTS.SET_LOADING, payload: false });
  }
};
