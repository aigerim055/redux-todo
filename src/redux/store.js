import {applyMiddleware, createStore} from 'redux'
import todoReducer from "./reducer/todoReducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";

const store = createStore(
	todoReducer,
	composeWithDevTools(applyMiddleware(thunk))
)

export default store;

// thunk - он нужен для асинхронных запросов на бэк