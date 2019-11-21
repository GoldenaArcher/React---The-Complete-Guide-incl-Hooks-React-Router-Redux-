import React from 'react';

import style from './Input.module.css';

const Input = (props) => {
    let inputElement = null;

    switch (props.inputtype) {
        case ('input'):
            inputElement = <input
                className={style.InputElement}
                {...props}
                value={props.value} />
            break;
        case ('textarea'):
            inputElement = <textarea
                className={style.InputElement}
                {...props}
                value={props.value} />
            break;
        default:
            inputElement = <input className={style.InputElement}
                {...props}
                value={props.value} />
            break;
    };
    return (
        <div className={style.Input}>
            <label className={style.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input
