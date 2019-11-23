import React from 'react';

import style from './Input.module.css';

const Input = (props) => {
    let inputElement = null;
    const inputClasses = [style.InputElement];
    let validError = null;

    if (props.invalid && props.touched) {
        inputClasses.push(style.Invalid);
        validError = <p className={style.Error}>Please enter a valid {props.elementType}</p>
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case ('select'):
            inputElement = (<select
                className={inputClasses.join(' ')}
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
            inputElement = <input className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
    };
    return (
        <div className={style.Input}>
            <label className={style.Label}>{props.label}</label>
            {inputElement}
            {validError}
        </div>
    )
}

export default Input
