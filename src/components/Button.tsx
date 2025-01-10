import React from 'react';

type ButtonType = {
    title: string
    isDisabled?: boolean
    callback?: () => void
    className?: string
}

export const Button = ({title, callback, isDisabled, className}: ButtonType) => {
    return (
        <button
            className={`btn ${className}`}
            onClick={callback}
            disabled={isDisabled}
        >{title}</button>
    );
};
