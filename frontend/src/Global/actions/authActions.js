import {checkAuth, login, verify} from '../../services/authService'
import { AUTH_ACTION_CONSTANTS } from './action.constants';
import { loadState, saveState } from '../../utils/localStorage';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLayoutEffect } from 'react';


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



//i want use useNavigate in action creater
//Hooks can only be called inside of the body of a function component.
//Or, at the top level in the body of a custom Hook.
//react component names must start with an uppercase letter.
//react hook names must start with the word 'use'
//that's why,i create custom hook for action creater ,
//and names it start with 'use'
export const useVerify = () => {
        const navigate = useNavigate();

 return (email, otp, from) => async (dispatch) => {
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
}

export const checkAuthAC = () => 
  async (dispatch) => {
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
    }
    finally {
      dispatch({ type: AUTH_ACTION_CONSTANTS.SET_LOADING, payload: false })
    }
  }


