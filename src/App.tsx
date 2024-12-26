import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";

function App() {

    const maxCounterValue = 5
    const minCounterValue = 0
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
                minCounterValue={minCounterValue}
            />
        </div>
    );
}

export default App;
