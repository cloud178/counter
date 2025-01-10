import React from 'react';
import {Button} from "./Button";

type CounterType = {
    counter: number
    increaseCounter: () => void
    resetCounter: () => void
    maxValue: number
    minValue: number
    textOrCounter: boolean
}

export const Counter = (props: CounterType) => {

    const {
        counter,
        maxValue,
        minValue,
        textOrCounter,
        increaseCounter,
        resetCounter,
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
            </div>
        </div>
    );
};
