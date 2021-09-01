import {DELETE_TODO, PUSH_EDIT_TODO, PUSH_EDITED_TODOS, SAVE_TODO} from "../actions";

let initialState = {todos: [], editTodo: {}};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_TODO : {
            return {...state, todos: [...state.todos, action.payload]}
        }

        // case DELETE_TODO : {
        //     const newTodos = state.todos.filter(value => value.id !== action.payload.id)
        //     return {...state, todos: [...newTodos]}
        // }
        case DELETE_TODO : {
            return {...state, todos: [...action.payload]}
        }
        case PUSH_EDIT_TODO : {
            return {...state, editTodo: {...action.payload}}
        }
        case PUSH_EDITED_TODOS : {
            return {...state, todos: [...action.payload]}
        }


        default:
            return state;
    }

}