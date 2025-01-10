import React from 'react';

type ButtonType = {
    title: string
    isDisabled?: boolean
    callback?: () => void
}

export const Button = ({title, callback, isDisabled}: ButtonType) => {
    return (
        <button
            className={'btn'}
            onClick={callback}
            disabled={isDisabled}
        >{title}</button>
    );
};
