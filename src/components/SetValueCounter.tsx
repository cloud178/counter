import {Button} from "./Button"
import {ChangeEvent, useState} from "react";

type SetValueCounterType = {
    maxValue: number
    minValue: number
    setMaxValueHandler: (value: string) => void
    setMinValueHandler: (value: string) => void
    setCounterWithStartValue: (value: number) => void
    changeTextOrCounterMessage: (value: boolean) => void
}


export const SetValueCounter = (props: SetValueCounterType) => {
    const {
        maxValue,
        minValue,
        setMaxValueHandler,
        setMinValueHandler,
        setCounterWithStartValue,
        changeTextOrCounterMessage
    } = props

    const [btnSetDisabled, setBtnSetDisabled] = useState<boolean>(true)

    const MaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValueHandler(e.currentTarget.value)
        changeTextOrCounterMessage(true)
        setBtnSetDisabled(false)
    }

    const MinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValueHandler(e.currentTarget.value)
        changeTextOrCounterMessage(true)
        setBtnSetDisabled(false)
    }

    const setValueHandler = () => {
        localStorage.setItem('maxCounterValue', JSON.stringify(maxValue))
        localStorage.setItem('minCounterValue', JSON.stringify(minValue))
        setCounterWithStartValue(minValue)
        changeTextOrCounterMessage(false)
    }

    return (
        <div className={'counter btn-wrapper set-value'}>
            <label><span>max value: </span>
                <input
                    type="number"
                    className={`input ${
                        maxValue < 1 || minValue >= maxValue
                            ? 'incorrect-input-value'
                            : ''
                    }`}
                    value={maxValue}
                    onChange={MaxValueHandler}
                /></label>
            <label><span>start value: </span>
                <input
                    type="number"
                    className={`input ${
                        minValue < 0 || minValue >= maxValue
                            ? 'incorrect-input-value'
                            : ''
                    }`}
                    value={minValue}
                    onChange={MinValueHandler}
                /></label>
            <Button
                title="set"
                callback={setValueHandler}
                isDisabled={
                    minValue < 0
                    || minValue >= maxValue
                    || btnSetDisabled
                }/>
        </div>
    )
}
