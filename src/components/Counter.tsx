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

    const increaseCounterHandler = () => {
        props.increaseCounter()
    }

    const resetCounterHandler = () => {
        props.resetCounter()
    }

    return (
        <div className="counter">
            <div className={props.counter >= props.maxCounterValue ? "max-counter-color value" : "value"}>
                {props.counter}
            </div>
            <div className={'btn-wrapper'}>
                <Button
                    className={'btn'}
                    title={'inc'}
                    callback={increaseCounterHandler}
                    isDisabled={props.counter >= props.maxCounterValue}
                />
                <Button
                    className={'btn'}
                    title={'reset'}
                    callback={resetCounterHandler}
                    isDisabled={props.counter === props.minCounterValue}
                />
            </div>
        </div>
    );
};
