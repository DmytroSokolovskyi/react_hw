import {SET_USER, SET_USERS, USER_INFO} from "./actionTypes";

export const setUsers = (value) => {
    return {type: SET_USERS, payload: value}
};
export const setFormUser = (value) => {
    return {type: SET_USER, payload: value}
};
export const setUserInfo = (value) => {
    return {type: USER_INFO, payload: value}
};