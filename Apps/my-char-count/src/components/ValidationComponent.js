import React from 'react';

const validationStyle = {
    color: 'red',
  };

const ValidationComponent = (props) => {
    let validationMsg=null;
    if (props.userNameLength < 5) {
        validationMsg = (
            <p style={validationStyle}>
                User Name of {props.userName} is too short, it needs to at least 5 characters.
            </p>
        );
    } 
    return validationMsg;
}

export default ValidationComponent;