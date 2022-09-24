import { USER_ACTION_CONSTANTS } from "../actions/action.constants";

const initState = {
    isLoading: false,
    user: null,
    error:null
};

export const userReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case USER_ACTION_CONSTANTS.USER_LOADING:
            return { ...state, isLoading: payload }
        case USER_ACTION_CONSTANTS.USER_SUCCESS:
            return {
                ...state,user:payload,error:null
            }
        case USER_ACTION_CONSTANTS.USER_FAIL:
            return {
                ...state, error: payload,
            }

      default:
        return state;
    }
}