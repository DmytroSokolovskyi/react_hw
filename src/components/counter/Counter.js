import {useReducer} from "react";
import reducer from "../../reducers/counterReducer";
import './Counter.css'

export default function Counter() {

    const [{a, b, c}, dispatch] = useReducer(reducer, {a: 1, b: 0, c: 0});


    const increment = (item) => {
        dispatch({type: 'INC', payload: item})
    };

    const decrement = (item) => {
        dispatch({type: 'DEC', payload: item})
    };

    return (
        <div className={'main'}>
            <div>
                <h3>A- {a}</h3>
                <button onClick={() => {increment('a')}}>INC</button>
                <button onClick={() => {decrement('a')}}>DEC</button>
            </div>

            <div>
                <h3>B- {b}</h3>
                <button onClick={() => {increment('b')}}>INC</button>
                <button onClick={() => {decrement('b')}}>DEC</button>
            </div>
            <div>
                <h3>C- {c}</h3>
                <button onClick={() => {increment('c')}}>INC</button>
                <button onClick={() => {decrement('c')}}>DEC</button>
            </div>
        </div>
    );
}
