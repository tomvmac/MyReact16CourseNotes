import React from "react";
import './User.css'

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>User Name is {props.userName} </p>
      <p>Paragragh2</p>
    </div>
  );
};

export default UserOutput;
