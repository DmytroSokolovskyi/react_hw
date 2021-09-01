import classes from './Todo.module.css'
import {useDispatch, useSelector} from "react-redux";
import {deleteOneTodo} from "../../services/todo.service";
import {pushToEdit} from "../../redux/actions";


export default function Todo({todo, number}) {

    const dispatch = useDispatch();
    const {todos} = useSelector(state => state);

    const editThis = () => {
        dispatch(pushToEdit(todo))
    };

    const deleteThis = () => {
        // dispatch(deleteTodo(todo))
        dispatch(deleteOneTodo(todo, todos))
    };
    return (
        <div className={classes.mainDiv}>
            <div>
                <strong>{number} {todo.title}</strong> <br/> {todo.description}
            </div>
            <div>
                <button onClick={editThis}>edit</button>
                <button onClick={deleteThis}>delete</button>
            </div>

        </div>
    );
}
