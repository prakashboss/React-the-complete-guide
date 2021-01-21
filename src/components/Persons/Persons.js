import React, { Component } from "react";
import Person from "./Person/Person";

// const Persons = (props) => {
class Persons extends Component {
  render() {
    console.log("persons.js");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.Click(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          change={(event) => this.props.Change(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
