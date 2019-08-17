import React from 'react';

const userInput = (props) => {
    const style = {
        backgroundColor: '#eee',
        border: '1px solid black',
        textAlign: 'center',
      };

    return (
        <input type='text' 
            onChange={props.changed} 
            value={props.currName}
            style={style}/>
    )
};

export default userInput;