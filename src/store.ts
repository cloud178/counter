import {combineReducers, createStore} from "redux";
import {counterReducer} from "./features/model/counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer,
})

// type AppRootState = {
//     todolists: TodolistType[]
//     tasks: TaskType
// }
export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store // хотим уметь пользоваться стором из консоли прям в браузере
