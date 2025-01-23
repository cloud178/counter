import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {SetValueCounter} from './components/SetValueCounter';

function App() {

    const [counter, setCounter] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    const [minValue, setMinValue] = useState<number>(0);
    const [textOrCounter, setTextOrCounter] = useState<boolean>(false);
    const [counterMenu, setCounterMenu] = useState<boolean>(false)

    useEffect(() => {
        const maxCounterValue = localStorage.getItem('maxCounterValue')
        const minCounterValue = localStorage.getItem('minCounterValue')
        if (maxCounterValue) {
            setMaxValue(JSON.parse(maxCounterValue))
        }
        if (minCounterValue) {
            setMinValue(JSON.parse(minCounterValue))
            setCounter(JSON.parse(minCounterValue))
        }
    }, [])

    const setMaxValueHandler = (value: string) => {
        setMaxValue(JSON.parse(value))
    }

    const setMinValueHandler = (value: string) => {
        setMinValue(JSON.parse(value))
    }

    const setCounterWithStartValue = (value: number) => {
        setCounter(value)
    }

    const increaseCounter = () => {
        if (counter < maxValue) {
            setCounter(counter + 1);
        }
    }

    const resetCounter = () => {
        setCounter(minValue);
    }

    const changeTextOrCounterMessage = (value: boolean) => {
        setTextOrCounter(value)
    }

    return (
        <div className="App">
            {
                counterMenu
                ? <SetValueCounter
                        maxValue={maxValue}
                        minValue={minValue}
                        setMaxValueHandler={setMaxValueHandler}
                        setMinValueHandler={setMinValueHandler}
                        setCounterWithStartValue={setCounterWithStartValue}
                        changeTextOrCounterMessage={changeTextOrCounterMessage}
                        counterMenu={counterMenu}
                        setCounterMenu={setCounterMenu}
                    />
                : <Counter
                        counter={counter}
                        increaseCounter={increaseCounter}
                        resetCounter={resetCounter}
                        minValue={minValue}
                        maxValue={maxValue}
                        textOrCounter={textOrCounter}
                        counterMenu={counterMenu}
                        setCounterMenu={setCounterMenu}
                    />
            }
        </div>
    );
}

export default App;
