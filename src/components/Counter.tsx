import React from 'react';
import {Button} from "./Button";

type CounterType = {
    counter: number
    increaseCounter: () => void
    resetCounter: () => void
    maxCounterValue: number
    minCounterValue: number
}

export const Counter = (props: CounterType) => {

    const {
        counter,
        maxCounterValue,
        minCounterValue,
        increaseCounter,
        resetCounter,
    } = props


    const increaseCounterHandler = () => {
        increaseCounter()
    }

    const resetCounterHandler = () => {
        resetCounter()
    }

    return (
        <div className="counter">
            <div className={counter >= maxCounterValue ? "max-counter-color value" : "value"}>
                {counter}
            </div>
            <div className={'btn-wrapper'}>
                <Button
                    title={'inc'}
                    callback={increaseCounterHandler}
                    isDisabled={counter >= maxCounterValue}
                />
                <Button
                    title={'reset'}
                    callback={resetCounterHandler}
                    isDisabled={counter === minCounterValue}
                />
            </div>
        </div>
    );
};
