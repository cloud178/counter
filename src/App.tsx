import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";

function App() {

    const [value, setValue] = useState<number>(0)

    const incHandler = () => {
        setValue(value + 1)
    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterKey', JSON.stringify(value))
        localStorage.setItem('counterKey + 1', JSON.stringify(value + 1))
    }

    const getToLocalStorageHandler = () => {

        const valueAsString = localStorage.getItem('counterKey')
        if (valueAsString) {
            setValue(JSON.parse(valueAsString))
        }
    }

    const clearLocalStorageHandler = () => {
        localStorage.clear()
        setValue(0)
    }

    const removeItemFromLocalStorageHandler = () => {
        localStorage.removeItem('counterKey + 1')
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
            <button onClick={getToLocalStorageHandler}>getToLocalStorage</button>
            <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
            <button onClick={removeItemFromLocalStorageHandler}>removeItemFromLocalStorage</button>
        </div>
    );
}

export default App;
