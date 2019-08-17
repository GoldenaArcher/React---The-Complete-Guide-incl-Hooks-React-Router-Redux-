import React from 'react';

const validator = (props) => {
    const {input} = props;

    let validationMsg = '';

    if (input.length <= 5) {
        validationMsg = <p>Text too short</p>;
    } else {
        validationMsg = <p>Text long enough</p>;
    }

    return (
        <div>
            {validationMsg}
        </div>
    );
};

export default validator;