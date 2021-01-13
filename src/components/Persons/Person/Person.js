import React from "react";
import classes from "./Person.css";
// import Radium from 'radium';
// import styled from 'styled-components'

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

const Person =(props) =>{
  // console.log(classes)
  // const Style = {
  //   '@media (min-width: 600px)': {
  //     width: '450px',
  //     backgroundColor: 'orange',
  //     color: 'white'
  //   }
  // }
  return (
    
    <div className={classes.Person}>
      {console.log('person.js')}
      <p onClick={props.click}>
        I am {props.name} and {props.age} old.
      </p>
      {/* <p>{props.children}</p> */}
      <input onChange={props.change} defaultValue={props.name} />
    </div>
  );
};

export default Person;
