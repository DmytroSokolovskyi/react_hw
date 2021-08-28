import {combineReducers} from 'redux'
import {usersReducer} from "./usersReducer";
import {carsReducer} from "./carsReduser";

 export const reducer = combineReducers({carsReducer, usersReducer})