import React from "react";
import "./Person.css";

const Person =(props) =>{
  return (
    <div className="Person">
      <p onClick={props.click}>
        I am {props.name} and {props.age} old. {props.children}
      </p>
      {/* <p>{props.children}</p> */}
      <input onChange={props.change} defaultValue={props.name} />
    </div>
  );
};

export default Person;
