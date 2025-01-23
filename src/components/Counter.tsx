import React from 'react';
import {Button} from "./Button";

type CounterType = {
    counter: number
    increaseCounter: () => void
    resetCounter: () => void
    maxValue: number
    minValue: number
    textOrCounter: boolean
    counterMenu: boolean
    setCounterMenu: (value: boolean) => void
}

export const Counter = (props: CounterType) => {

    const {
        counter,
        maxValue,
        minValue,
        textOrCounter,
        increaseCounter,
        resetCounter,
        ...restProps
    } = props

    let maxVaLueFromLocalStorage = maxValue;
    const maxVaLueFromLocalStorageString = localStorage.getItem('maxCounterValue')
    if (maxVaLueFromLocalStorageString) {
        maxVaLueFromLocalStorage = JSON.parse(maxVaLueFromLocalStorageString)
    }

    const increaseCounterHandler = () => {
        increaseCounter()
    }

    const resetCounterHandler = () => {
        resetCounter()
    }

    const togleCounterMenuHandler = () => {
        restProps.setCounterMenu(!restProps.counterMenu)
    }


    return (
        <div className="counter">
            <div
                className={counter >= maxVaLueFromLocalStorage ? "max-counter-color-or-incorrect-value value" : "value"}>
                {
                    maxValue <= minValue || minValue < 0 || maxValue < 1
                        ? <span className={'max-counter-color-or-incorrect-value'}>Incorrect value!</span>
                        : textOrCounter
                            ? "enter values and press 'set'"
                            : counter
                }
            </div>
            <div className={'btn-wrapper'}>
                <Button
                    title={'inc'}
                    callback={increaseCounterHandler}
                    isDisabled={
                        counter >= maxVaLueFromLocalStorage
                        || minValue < 0
                        || minValue >= maxValue
                        || textOrCounter
                    }
                />
                <Button
                    title={'reset'}
                    callback={resetCounterHandler}
                    isDisabled={
                        counter === minValue
                        || minValue < 0
                        || minValue >= maxValue
                        || textOrCounter
                    }
                />
                <Button
                    title={'set'}
                    callback={togleCounterMenuHandler}
                />
            </div>
        </div>
    );
};
