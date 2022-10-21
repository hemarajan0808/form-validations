import React, { useState } from "react";
import classes from "../index.css";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [enteredEmail, setEnteredEmail] = useState("");

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (enteredName.trim() === "") {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);
    console.log(enteredName);
    console.log(enteredEmail);
    setEnteredName("");
    setEnteredEmail("");
  };

  const nameInputClasses = nameIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name"> Your Name: </label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={enteredName}
        />
        {!nameIsValid && <p> The Name is not Valid </p>}
        <label htmlFor="email"> Email :</label>
        <input type="email" id="email" onChange={emailChangeHandler} />
        <div className="submit-button">
          <button> Submit </button>
        </div>
      </div>
    </form>
  );
};

export default SimpleInput;
