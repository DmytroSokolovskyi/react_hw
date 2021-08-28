import {SET_ONE_USER, SET_USERS} from "./actionTypes";


export const setOneUser = (value) => {
return {type: SET_ONE_USER, payload: value}
};
export const setUsers = (value) => {
return {type: SET_USERS, payload: value}
};