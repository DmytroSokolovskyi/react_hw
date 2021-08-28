import {GET_CARS} from "../actions";

export const carsReducer = (state = {cars: []}, action) => {
    switch (action.type) {
        case GET_CARS: {
            return {...state, cars: [...action.payload]}
        }
        default :
            return state
    }

}

