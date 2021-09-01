import {createStore, applyMiddleware} from "redux"
import ReduxThunk from "redux-thunk";
import {reducer} from "../reducers/reducer";

export const store = createStore(reducer, applyMiddleware(ReduxThunk));