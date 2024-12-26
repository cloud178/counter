import React, {useState} from 'react';
import {Button} from "./Button";

type CounterType = {
    counter: number
    increaseCounter: () => void
    resetCounter: () => void
}

export const Counter = (props: CounterType) => {

    const [disabledReset, setDisabledReset] = useState<boolean>(true);
    const [disabledIncrease, setDisabledIncrease] = useState<boolean>(false);


    const increaseCounterHandler = () =>{
        props.increaseCounter()
        setDisabledReset(false)
    }

    const resetCounterHandler = () =>{
        props.resetCounter()
        setDisabledReset(true)
        setDisabledIncrease(false)

    }

    return (
        <div className="counter">
            <div className={props.counter > 4 ? "max-counter-color value": "value"}>
                {props.counter}
            </div>
            <div className={'flex-wrapper'}>
                <Button
                    title={'inc'}
                    callback={increaseCounterHandler}
                    isDisabled={props.counter > 4}
                />
                <Button title={'reset'}
                        callback={resetCounterHandler}
                        isDisabled={disabledReset}
                />
            </div>
        </div>
    );
};
