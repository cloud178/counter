import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState: number = 0

// type ActionType = incrementCounterActionType | returnDefaultCounterActionType
//
// export const incrementCounterAC = (value: number) => {
//     return ({
//         type: 'increment',
//         payload: value,
//     } as const)
// }
// export type incrementCounterActionType = ReturnType<typeof incrementCounterAC>
//
// export const returnDefaultCounterAC = (value: number) => {
//     return ({
//         type: 'returnDefault',
//         payload: value,
//     } as const)
// }
// export type returnDefaultCounterActionType = ReturnType<typeof returnDefaultCounterAC>
//
//
// export const counterReducer = (counter: number = initialState, action: ActionType) => {
//     switch (action.type) {
//         case 'increment': {
//             let counterCopy = action.payload
//             return ++counterCopy
//         }
//         case 'returnDefault': {
//             let counterCopy = action.payload
//             return counterCopy
//         }
//         default: return counter
//     }
// }

export const incrementCounterAC = createAction<{ counter: number }>('counter/increment')
export const returnDefaultCounterAC = createAction<{ counter: number }>('counter/returnDefault')
export type incrementCounterActionType = ReturnType<typeof incrementCounterAC>
export type returnDefaultCounterActionType = ReturnType<typeof returnDefaultCounterAC>
type ActionType = incrementCounterActionType | returnDefaultCounterActionType

// export const counterReducer = createReducer(initialState, builder => {
//     builder
//         .addCase(incrementCounterAC, (state, action) => {
//             return action.payload.counter + 1
//         })
//         .addCase(returnDefaultCounterAC, (state, action) => {
//             return action.payload.counter
//         })
// })

export const counterReducer = (counter: number = initialState, action: ActionType) => {
    switch (action.type) {
        case 'increment': {
            let counterCopy = action.payload.counter
            return ++counterCopy
        }
        case 'returnDefault': {
            let counterCopy = action.payload.counter
            return counterCopy
        }
        default: return counter
    }
}

