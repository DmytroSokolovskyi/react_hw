import {DELETE_TODO, PUSH_EDIT_TODO, PUSH_EDITED_TODOS, SAVE_TODO} from "./actionsType";

export const saveTodo = (value) => {
  return {type: SAVE_TODO, payload: value}
}
export const deleteTodo = (value) => {
  return {type: DELETE_TODO, payload: value}
}
export const pushToEdit = (value) => {
  return {type: PUSH_EDIT_TODO, payload: value}
}
export const pushEditedTodos = (value) => {
  return {type: PUSH_EDITED_TODOS, payload: value}
}
