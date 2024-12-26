import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter";

function App() {

    const maxCounterValue = 5
    const [counter, setCounter] = useState<number>(0);

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
            <Counter
                counter={counter}
                increaseCounter={increaseCounter}
                resetCounter={resetCounter}
                maxCounterValue={maxCounterValue}
            />
        </div>
    );
}

export default App;
