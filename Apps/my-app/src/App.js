import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id:1, name: "Michael Jordan", age: 23 },
      { id:2, name: "Kobe Bryant", age: 24 },
      { id:3, name: "Lebron James", age: 26 }
    ],
    showPersons: true
  };


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
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "2px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
