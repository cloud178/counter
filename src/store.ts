import {combineReducers} from "redux";
import {counterReducer} from "./features/model/counter-reducer";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    counter: counterReducer,
})

// type AppRootState = {
//     todolists: TodolistType[]
//     tasks: TaskType
// }

export const store = configureStore({
    reducer: rootReducer,
})

export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store // хотим уметь пользоваться стором из консоли прям в браузере
