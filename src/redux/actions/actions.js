import {EDIT_CAR, GET_CARS, SAVE_CAR, SET_ONE_USER, SET_USERS} from "./actionTypes";


export const setOneUser = (value) => {
    return {type: SET_ONE_USER, payload: value}
};
export const setUsers = (value) => {
    return {type: SET_USERS, payload: value}
};
export const getAllCars = (value) => {
    return {type: GET_CARS, payload: value}
};
export const saveFormCar = (value) => {
    return {type: SAVE_CAR, payload: value}
};
export const editOneFormCar = (value) => {
    return {type: EDIT_CAR, payload: value}
};