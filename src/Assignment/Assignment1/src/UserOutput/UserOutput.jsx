import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className='paragraphs'>
            <p>abcdefg</p>
            <p>hijklmn</p>
            <p>name is: {props.name}</p>
        </div>
    )
};

export default userOutput;