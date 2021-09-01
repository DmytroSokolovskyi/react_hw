import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editOneTodo, saveOneTodo} from "../../services/todo.service";
import classes from './TodoForm.module.css'

export default function TodoForm() {
    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');


    const {editTodo, todos} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        setTitle(editTodo.title);
        setDescription(editTodo.description);
    }, [editTodo]);


    const saveFormTodo = (e) => {
        e.preventDefault();
        let todoForm = {title: title, description: description}
        editTodo.id ? dispatch(editOneTodo(editTodo.id, todoForm, todos)) : dispatch(saveOneTodo(todoForm));
        setTitle('');
        setDescription('');
    };

    return (
        <div>
            <form onSubmit={saveFormTodo}>
                <input className={classes.input} type="text" name={'title'} value={title} placeholder={'title'}
                       onChange={e => setTitle(e.target.value)}/>
                <input className={classes.input} type="text" name={'description'} value={description}
                       placeholder={'description'} onChange={e => setDescription(e.target.value)}/>
                <input type="submit"/>
            </form>
        </div>
    );
}
