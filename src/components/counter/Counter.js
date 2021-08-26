import {useReducer} from "react";
import reduser from "../../reducers/counterReducer";



export default function Counter() {

    const [state, dispatch] = useReducer(reduser, {counter: 0})


    const increment = () => {
        dispatch({type: "INC"})
    };
    const decrement = () => {
        dispatch({type: "DEC"})
    };
    const clearCounter = () => {
        dispatch({type: "CLEAR"})
    };

    return (
        <div>
            <h3>counter - {state.counter}</h3>
            <button onClick={increment}>plus 10</button>
            <button onClick={decrement}>minus 2</button>
            <button onClick={clearCounter}>clear</button>
        </div>
    );
}
