import React, {useState} from 'react';
import {Button} from "./Button";

type CounterType = {
    counter: number
    increaseCounter: (setDisabledInc: (value: boolean) => void) => void
    resetCounter: () => void
    maxCounterValue: number
}

export const Counter = (props: CounterType) => {

    const [disabledReset, setDisabledReset] = useState<boolean>(true);
    const [disabledInc, setDisabledInc] = useState<boolean>(false);


    const increaseCounterHandler = () => {
        props.increaseCounter(setDisabledInc)
        setDisabledReset(false)
    }

    const resetCounterHandler = () => {
        props.resetCounter()
        setDisabledReset(true)
        setDisabledInc(false)
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
                    // isDisabled={props.counter >= props.maxCounterValue}
                    isDisabled={disabledInc}
                />
                <Button
                    className={'btn'}
                    title={'reset'}
                    callback={resetCounterHandler}
                    isDisabled={disabledReset}
                />
            </div>
        </div>
    );
};
