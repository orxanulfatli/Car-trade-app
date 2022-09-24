import { combineReducers } from "redux";
import {authReducer} from './reducers/authReducer'
import { carReducer } from "./reducers/carReducer";
import { dropdownReducer } from "./reducers/dropdownReducer";
import { filterReducer } from "./reducers/filterReducer";
import { userReducer } from "./reducers/userReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    car: carReducer,
    dropdown: dropdownReducer,
    filter:filterReducer
})