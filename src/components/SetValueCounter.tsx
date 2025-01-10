import { Button } from "./Button"

export const SetValueCounter = () => {
    return (
        <div className={'counter btn-wrapper set-value'}>
            <label>max value: <input type="number" className={"input"}/></label>
            <label>start value: <input type="number" className={"input"}/></label>
            <Button title="set"/>
        </div>
    )
}
