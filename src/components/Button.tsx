import React from 'react';

type ButtonType = {
    title: string
    isDisabled?: boolean
    callback?: () => void
}

export const Button = ({title, callback, isDisabled}: ButtonType) => {
    const onClickButtonHandler = () => {
        if (callback) {
            callback()
        }
    }

    return (
        <button
            className={'btn'}
            onClick={onClickButtonHandler}
            disabled={isDisabled}
        >{title}</button>
    );
};
