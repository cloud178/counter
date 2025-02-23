const initialState: number = 0

type ActionType = incrementCounterActionType | returnDefaultCounterActionType

export const incrementCounterAC = (value: number) => {
    return ({
        type: 'increment',
        payload: value,
    } as const)
}
export type incrementCounterActionType = ReturnType<typeof incrementCounterAC>

export const returnDefaultCounterAC = (value: number) => {
    return ({
        type: 'returnDefault',
        payload: value,
    } as const)
}
export type returnDefaultCounterActionType = ReturnType<typeof returnDefaultCounterAC>


export const counterReducer = (counter: number = initialState, action: ActionType) => {
    switch (action.type) {
        case 'increment': {
            let counterCopy = action.payload
            return ++counterCopy
        }
        case 'returnDefault': {
            let counterCopy = action.payload
            return counterCopy
        }
        default: return counter
    }
}
