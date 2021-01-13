import React from "react";
import Person from "./Person/Person";

const Persons = (props) => {
  console.log("persons.js")
  return (
    
  props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.Click(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        change={(event) => props.Change(event, person.id)}
      />
    );
  })
  )
  
};

export default Persons;
