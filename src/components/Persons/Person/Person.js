import React, { Component } from "react";
import classes from "./Person.css";
// import Radium from 'radium';
// import styled from 'styled-components'
import Aux from "../../hoc/Auxiliary";
import WithClass from '../../hoc/WithClass'

// const StyledDiv = styled.div`
//   width: 60%;
//   margin: auto;
//   border: 1px solid #eee;
//   box-shadow: 0 2px 8px #ccc;
//   padding: 16px;
//   text-align: center;

// @media (min-width: 600px) {
//     width: 450px;
//     background-color: orange;
//     color: white;
//   }
// `

// const Person =(props) =>{
// console.log(classes)
// const Style = {
//   '@media (min-width: 600px)': {
//     width: '450px',
//     backgroundColor: 'orange',
//     color: 'white'
//   }
// }

class Person extends Component {
  render() {
    return (
      <WithClass classes={classes.Person}>
        {console.log("person.js")}
        <p onClick= {this.props.click}>
          I am {this.props.name} and {this.props.age} old.
        </p>
        {/* <p>{props.children}</p> */}
        <input onChange={this.props.change} defaultValue={this.props.name} />
      </WithClass>
    );
  }
}

export default Person;
