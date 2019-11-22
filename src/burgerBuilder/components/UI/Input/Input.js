import React from 'react';

import style from './Input.module.css';

const Input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={style.InputElement}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case ('textarea'):
            inputElement = <textarea
                className={style.InputElement}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case ('select'):
            inputElement = (<select
                className={style.InputElement}
                value={props.value}
                onChange={props.changed} >
                {props.elementConfig.options.map(option => (
                    <option
                        key={option.value}
                        value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select >)
            break;
        default:
            inputElement = <input className={style.InputElement}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
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
