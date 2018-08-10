import React, { Component } from "react";
//import "./App.css";
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  // Component Life Cycle
  constructor(props){
    super(props);
    console.log("App.js -> constructor", props);    
    this.state = {
      persons: [
        { id:1, name: "Michael Jordan", age: 23 },
        { id:2, name: "Kobe Bryant", age: 24 },
        { id:3, name: "Lebron James", age: 26 }
      ],
      showPersons: false
    };

  }

  componentWillMount(){
    console.log("App.js -> componentWillMount");
  }

  componentDidMount(){
    console.log("App.js -> componentDidMount");
  }

  


  nameChangeHandler = (event, id) => {

    // Find index of the person to change
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    
    // alternative solution with object assign
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    // Create a new array of persons to put into state
    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = (personIndex) => {
    // copy array by using slice
    //const persons = this.state.persons.slice();
    // copy array by using spread
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {

    console.log("App.js -> render()");
    let persons = null;
    

    if (this.state.showPersons) {      
      persons = (
        <div>
            <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangeHandler}
            />
        </div>
      );

      
    }




    return (
      <div className={classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
