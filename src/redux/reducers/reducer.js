import {SET_USER, SET_USERS, USER_INFO} from "../actions";

let initialState = {users: []};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USERS : {
          return {...state, users: [...action.payload]}
      }
      case SET_USER : {
          return {...state, users: [...state.users, action.payload]}
      }
      case USER_INFO : {
          return {...state, userInfo: {...action.payload}}
      }
      default: return state
  }
}