import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import { SetValueCounter } from './components/SetValueCounter';

function App() {

    const maxCounterValue = 5
    const minCounterValue = 0
    const [counter, setCounter] = useState<number>(0);

    useEffect( () => {
        localStorage.getItem('counterValue')
    }, [] )

    useEffect( () => {

    }, [value] )

    const increaseCounter = () => {
        if (counter < maxCounterValue) {
            setCounter(counter + 1);
        }
    }

    const resetCounter = () => {
        setCounter(0);
    }


    return (
        <div className="App">
            <SetValueCounter/>
            <Counter
                counter={counter}
                increaseCounter={increaseCounter}
                resetCounter={resetCounter}
                maxCounterValue={maxCounterValue}
                minCounterValue={minCounterValue}
            />
        </div>
    );
}

export default App;
