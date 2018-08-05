import React from 'react';

const style = {
    display: 'inline-block', 
    padding: '16px', 
    margin: '16px',
    border: '1px solid black',
    align: 'center'
  };

const CharComponent = (props) => {
    return (
        <div style={style}
            onClick={props.click}
        >
            {props.currentChar}
            
        </div>
    )
}

export default CharComponent;