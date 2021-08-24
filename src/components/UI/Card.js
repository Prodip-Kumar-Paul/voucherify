import { useState } from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  let res;
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://voucherify.herokuapp.com/", {
        method: "GET",
        headers: {
          Origin: "https://voucherify.netlify.app, http://localhost:3000",
        },
      });
      if (response.status !== 200) {
        throw new Error("something went wrong");
      }
      const data = await response.json();
      if (data.message === "success") {
        console.log("code deliver successfully");
        res = data.code;
      }
      if (!res) {
        throw new Error("code not received");
      } else {
        setCode(res);
      }
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };
  console.log(code);
  const content = (
    <div>
      <p>Your Voucher Code is </p>
      <strong>{code}</strong>
    </div>
  );
  return (
    <form onSubmit={submitHandler} className={classes.card}>
      {error === false ? <div>{props.children}</div> : <p>{error}</p>}
      {code.length === 0 ? "" : <div>{content}</div>}
    </form>
  );
};

export default Card;
