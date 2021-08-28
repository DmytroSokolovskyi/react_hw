import {EDIT_CAR, GET_CARS, SAVE_CAR} from "../actions";

export const carsReducer = (state = {cars: []}, action) => {

    switch (action.type) {
        case GET_CARS: {
            return {...state, cars: [...action.payload]}
        }
        case SAVE_CAR: {
            return {...state, cars: [...state.cars, action.payload]}
        }
        case EDIT_CAR: {
            const newCars = state.cars.map(car => {
                if (car.id === action.payload.id) {
                    return action.payload;
                }
                return car;
            });
            return  {...state, cars: [...newCars]}
        }
        default :
            return state
    }

}

