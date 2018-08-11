import React, { Component } from "react";
import classes from "./Person.css";
import PropTypes from "prop-types";

class Person extends Component {
  // Component Life Cycle
  constructor(props) {
    super(props);
    console.log("Person.js -> constructor", props);
  }

  componentWillMount() {
    console.log("Person.js -> componentWillMount");
  }

  componentDidMount() {
    console.log("Person.js -> componentDidMount");
    // check for position of Person in Persons and only focus on first Person 
    if (this.props.position ===0){
      this.nameInput.focus();
    }
    
  }

  render() {
    console.log("Person.js -> render()");

    return(
        <div className={classes.Person}>
        <p onClick={this.props.click}>
            My name is {this.props.name} and I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input 
          ref={(inputElement) => {this.nameInput = inputElement}}
          type="text" 
          onChange={this.props.changed}
          value={this.props.name} />
        </div>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default Person;
