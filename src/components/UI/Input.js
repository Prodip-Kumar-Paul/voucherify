import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.id}</label>
      <input type="text" ref={ref} id={props.id} />
    </div>
  );
});

export default Input;
