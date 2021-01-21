import React from "react";

function WithClass(props) {
  return (
    <div className={props.classes}>
      {props.children}
    </div>
  );
}

export default WithClass;
