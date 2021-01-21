import React, { useEffect } from "react";
import classes from './Cockpit.css'



const Cockpit = (props) => {
  useEffect(() => {
    console.log("useEffect in Cockpit")
    const Timer = setTimeout(() => {
      alert('from settimeout inside useeffect inside settimeout')
    }, 1000 ) 
    return ( ) => {
      clearTimeout(Timer)
    }
  },[props] )

  let btnClass = ' ';
  if (props.showPerson) {
    btnClass =classes.Red;  
  }
  
  const assignedClasses = []
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold)
  }
  return (
    <div className={classes.Cockpit}>
          
      <h1>Hi, I am {props.title}</h1>
      <p className={assignedClasses.join(" ")}>the className is dynamic</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Person
      </button>
    </div>
  )

}

export default React.memo(Cockpit)