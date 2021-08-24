import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`${classes.btn} ${classes[props.className]}`}
    >
      Get Code
    </button>
  );
};

export default Button;
