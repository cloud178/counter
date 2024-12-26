import React from 'react';

type ButtonType = {
    title: string
    isDisabled?: boolean
    callback?: () => void
    className?: string
}

export const Button = ({title, callback, isDisabled, className}: ButtonType) => {
    const onClickButtonHandler = () => {
        if (callback) {
            callback()
        }
    }

    return (
        <button
            className={className}
            onClick={onClickButtonHandler}
            disabled={isDisabled}
        >{title}</button>
    );
};
