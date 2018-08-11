import React, { Component } from "react";
import Person from "./Person/Person";

// omitt return statement in es6 arrow function
class Persons extends Component {
  // Component Life Cycle
  // Creation Life Cycle Hooks
  constructor(props){
    super(props);
    console.log("Persons.js -> constructor", props);    
  }

  componentWillMount(){
    console.log("Persons.js -> componentWillMount");
  }

  componentDidMount(){
    console.log("Persons.js -> componentDidMount");
  }

  // Update Life Cycle Hooks
  componentWillReceiveProps(nextProps){
    console.log("Persons.js -> componentWillReceiveProps");
    console.log("nextProps", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("Persons.shouldComponentUpdate");
    console.log("nextProps", nextProps);
    console.log("nextState", nextState);  
    return nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked;
    // this would force it to NOT update ever and other subsequent component update life cycle methods
    //return false;  
  }

  componentWillUpdate(nextProps, nextState){
    console.log("Persons.componentWillUpdate");
    
  }

  componentDidUpdate(){
    console.log("Perons.componentDidUpdate");
  }

  render() {
    console.log("Persons.js -> render()");

    return this.props.persons.map((person, index) => {
      return (
        <Person
          position={index}
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
