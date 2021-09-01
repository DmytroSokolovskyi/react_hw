import {deleteTodo, pushEditedTodos, saveTodo} from "../redux/actions";


const saveOneTodo = (todo) => (dispatch) => {
    const newTodo = {id: Date.now(), title: todo.title, description: todo.description}
    dispatch(saveTodo(newTodo));
};
const deleteOneTodo = (todo, todos) => (dispatch) => {
    const newTodos = todos.filter(value => value.id !== todo.id);
    dispatch(deleteTodo(newTodos));
};
const editOneTodo = (id, todoForm, todos) => (dispatch) => {
    const editedTodos = todos.map(todo => {
        if (todo.id === id) {
            return todoForm;
        }
        return todo;
    });
    dispatch(pushEditedTodos(editedTodos));
}

export {saveOneTodo, deleteOneTodo, editOneTodo}