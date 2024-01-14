import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todos/todoSlice";

const reducer = combineReducers({
    todos: todoReducer,
});

export const store = configureStore({ reducer });