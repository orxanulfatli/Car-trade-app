import { getUser } from "../../services/userService";
import { USER_ACTION_CONSTANTS } from "./action.constants";

export const fetchUserAC = () => async (dispatch) => {
  try {
    dispatch({ type: USER_ACTION_CONSTANTS.USER_LOADING, payload: true });
    const response = await getUser();
    dispatch({
      type: USER_ACTION_CONSTANTS.USER_SUCCESS,
      payload: response?.data,
    });
  } catch (error) {
    dispatch({
      type: USER_ACTION_CONSTANTS.USER_FAIL,
      payload: error?.response?.data?.message,
    });
  } finally {
    dispatch({ type: USER_ACTION_CONSTANTS.USER_LOADING, payload: false });
  }
}