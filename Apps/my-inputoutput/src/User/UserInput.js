import React from 'react';
import './User.css';

const UserInput = (props) => {
    return (
        <div className="UserInput">
            <label>User Name:</label>
            <input 
                type="text" 
                name="userName" 
                placeholder="Enter User Name"
                onChange={props.changed} 
                value={props.userName}/>
        </div>
    );
}

export default UserInput;