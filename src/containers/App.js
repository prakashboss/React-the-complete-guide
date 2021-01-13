import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
// import Radium, {StyleRoot} from 'radium';
// import styled from 'styled-components';

// const StyledBtn = styled.button`
//   background-color: ${props => !props.showPersons ? 'green' : 'red'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => !props.showPersons ? 'lightgreen' : 'salmon'};
//     color: black;
//   }
// `

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App.js from Constructor");
  }

  state = {
    Persons: [
      { id: 1, name: "Prakash", age: 22 },
      { id: 2, name: "Akash", age: 25 },
      { id: 3, name: "Boss", age: 28 },
    ],
    speedo: {
      name: [],
    },
    ShowPerson: false,
  };

  componentDidMount() {
    console.log('App.js componentDidMount')
  }

  // componentWillMount() {
  //   console.log('App.js componentWillMount')
  // }

  static getDerivedStateFromProps(props, state) {
    console.log("App.js from getDerivedStateFromProps", props);
    return props;
  }

  deletePersonHandler = (personIndex) => {
    const newPersons = [...this.state.Persons];
    newPersons.splice(personIndex, 1);
    this.setState({ Persons: newPersons });
  };

  nameChangeHandler = (event, id) => {
    // const personIndex = this.state.Persons.findIndex((p) => {
    //   console.log(id, p.id);
    //   return p.id === id;
    // });
    const person = {
      ...this.state.Persons[id - 1],
    };
    person.name = event.target.value;
    const persons = [...this.state.Persons];
    persons[id - 1] = person;
    this.setState({ Persons: persons });
  };

  togglePersonHandler = () => {
    this.setState({
      ShowPerson: !this.state.ShowPerson,
    });
  };

  style = {
    border: "10px solid green",
  };
  render() {
    // const style = {
    //   backgroundColor: "green",
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };
    // const style1 = {
    //   border: "10px solid green",
    // };

    let persons = null;

    // console.log(btnClass)
    if (this.state.ShowPerson) {
      persons = (
        <Persons
          persons={this.state.Persons}
          Click={this.deletePersonHandler}
          Change={this.nameChangeHandler}
        />
        /* <div>
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
        </div> */
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
      // btnClass = classes.Red;
      // console.log(btnClass);
    }

    // const assignedClasses = []
    // if (this.state.Persons.length <= 2) {
    //   assignedClasses.push(classes.red)
    // }
    // if (this.state.Persons.length <= 1) {
    //   assignedClasses.push(classes.bold)
    // }
    return (
      // <StyleRoot>
      <div className={classes.App}>
        <Cockpit
          title={this.props.title}
          clicked={this.togglePersonHandler}
          showPerson={this.state.ShowPerson}
          Persons={this.state.Persons}
        />
        {persons}
      </div>
      // {/* </StyleRoot> */}
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
