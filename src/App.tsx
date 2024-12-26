import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter";

function App() {
    //BLL
    const [counter, setCounter] = React.useState(0);

    const increaseCounter = () => {
        if (counter <= 5) {
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
            />
        </div>
    );
}

export default App;
