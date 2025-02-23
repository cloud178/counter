import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {SetValueCounter} from './components/SetValueCounter';
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./store";
import {incrementCounterAC, returnDefaultCounterAC} from "./features/model/counter-reducer";

function App() {
    const dispatch = useDispatch();
    const counter = useSelector<AppRootState, number>( state => state.counter );


    // const [counter, setCounter] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    const [minValue, setMinValue] = useState<number>(0);
    const [textOrCounter, setTextOrCounter] = useState<boolean>(false);

    useEffect(() => {
        const maxCounterValue = localStorage.getItem('maxCounterValue')
        const minCounterValue = localStorage.getItem('minCounterValue')
        if (maxCounterValue) {
            setMaxValue(JSON.parse(maxCounterValue))
        }
        if (minCounterValue) {
            setMinValue(JSON.parse(minCounterValue))
            // setCounter(JSON.parse(minCounterValue))
            dispatch(returnDefaultCounterAC(JSON.parse(minCounterValue)))
        }
    }, [])

    const setMaxValueHandler = (value: string) => {
        setMaxValue(JSON.parse(value))
    }

    const setMinValueHandler = (value: string) => {
        setMinValue(JSON.parse(value))
    }

    const setCounterWithStartValue = (value: number) => {
        // setCounter(value)
        dispatch(returnDefaultCounterAC(value))
    }

    const increaseCounter = () => {
        if (counter < maxValue) {
            // setCounter(counter + 1);
            dispatch(incrementCounterAC(counter))

        }
    }

    const resetCounter = () => {
        // setCounter(minValue);
        dispatch(returnDefaultCounterAC(minValue))

    }

    const changeTextOrCounterMessage = (value: boolean) => {
        setTextOrCounter(value)
    }

    return (
        <div className="App">
            <SetValueCounter
                maxValue={maxValue}
                minValue={minValue}
                setMaxValueHandler={setMaxValueHandler}
                setMinValueHandler={setMinValueHandler}
                setCounterWithStartValue={setCounterWithStartValue}
                changeTextOrCounterMessage={changeTextOrCounterMessage}
            />
            <Counter
                counter={counter}
                increaseCounter={increaseCounter}
                resetCounter={resetCounter}
                minValue={minValue}
                maxValue={maxValue}
                textOrCounter={textOrCounter}
            />
        </div>
    );
}

export default App;
