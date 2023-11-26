import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todos/todoSlice";

const reducer = combineReducers({
    todo: todoReducer,
});

export const store = configureStore({
    reducer: reducer
})