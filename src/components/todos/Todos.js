import {useSelector} from "react-redux";
import TodoForm from "../todoForm/TodoForm";
import Todo from "../todo/Todo";

export default function Todos() {
    const {todos} = useSelector(state => state);
    return (
        <div>
            <div>
                <TodoForm/>
            </div>
            <div>
                {
                    todos.map((value, index) => <Todo number={index + 1} key={value.id} todo={value}/>)
                }
            </div>
        </div>
    );
}
