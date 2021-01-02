import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    Persons: [
      { id: 1, name: "Prakash", age: 22 },
      { id: 2, name: "Akash", age: 25 },
      { id: 3, name: "Boss", age: 28 },
    ],
    speedo: {
      name: [],
    },
    showPerson: false,
  };

  // switchNameHandler = (newName) => {
  //   this.setState( {
  //     Person: [
  //       {name: newName},
  //       {name: 'Akash'},
  //       {name: 'Boss'}
  //     ],
  //     speedo: {
  //       name: ['name', 'new object']
  //     }
  //   } )
  // }
  // switchAgeHandler = (newAge) => {
  //   this.setState({
  //     Person: [
  //       {age: newAge},
  //       {age: newAge},
  //       {age: 18}
  //     ]
  //   })
  // }
  deletePersonHandler = (personIndex) => {
    const newPersons = [...this.state.Persons];
    newPersons.splice(personIndex, 1);
    this.setState({ Persons: newPersons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.Persons.findIndex((p) => {
      console.log(id, p);
      return p.id === id;
    });
    const person = {
      ...this.state.Persons[personIndex],
    };
    person.name = event.target.value;
    const persons = [...this.state.Persons];
    persons[personIndex] = person;
    this.setState({ Persons: persons });
  };

  togglePersonHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson,
    });
  };

  style = {
    border: "10px solid green",
  };
  render() {
    const style = {
      backgroundColor: "blue",
    };
    const style1 = {
      border: "10px solid green",
    };

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.Persons.map((person, index) => {
            // console.log(person)
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
          {/* <Person name={this.state.Persons[0].name}
            age={this.state.Persons[0].age}
            change={this.nameChangeHandler} />
          <Person name={this.state.Persons[1].name}
            age={this.state.Persons[1].age}/>
          
          <Person name={this.state.Persons[2].name}
            age={this.state.Persons[2].age}
            change={this.nameChangeHandler}>
              Both children and argument can coexist
          </Person> */}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I am prakash</h1>
        <button style={style1} onClick={this.togglePersonHandler}>
          Toggle Person
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

// const [personState, setPersonsState] = useState({
//   Person: [
//     {name: 'Prakash', age: 22},
//     {name: 'Akash', age: 25},
//     {name: 'Boss', age: 28}

//   ]
// })
// const switchNameHandler = () => {
//   this.setState( {
//     Person: [
//       {name: 'Prakash', age: 12},
//       {name: 'Akash', age: 15},
//       {name: 'Boss', age: 18}
//     ],
//     speedo: {
//       name: ['name', 'new object']
//     }
//   } )
// }
// return (
//   <div className="App">
//     <h1>Hi, I am prakash</h1>
//     <button onClick={switchNameHandler}>Switch Name</button>
//     <Person name={personState.Person[0].name} age={personState.Person[0].age} />
//     <Person name={personState.Person[1].name} age={personState.Person[1].age}/>

//     <Person name={personState.Person[2].name} age={personState.Person[2].age}>Both children and argument can coexist</Person>
// <Person>{personState.speedo.name}</Person>
//   </div>
