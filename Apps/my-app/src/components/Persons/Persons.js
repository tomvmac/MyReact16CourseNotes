import React from "react";
import Person from './Person/Person';

// omitt return statement in es6 arrow function
const Persons = props =>
  props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={event => props.changed(event, person.id)}
      />
    );
  });

  export default Persons;