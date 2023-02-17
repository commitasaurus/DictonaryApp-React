import React from "react";
import classes from "./Speech.module.css";
const Verb = (props) => {
  const word = props.wordInfo;
  const definitions = word.map((el) => {
    return (
      <li key={Math.random()}>
        <p>{el.definition}</p>
        {el.example ? <p className={classes.example}>"{el.example}"</p> : ""}
      </li>
    );
  });
  return (
    <section>
      <h3 className={classes.header}>verb</h3>
      <div>
        <p className={classes["sub-header"]}>Meaning</p>
        <ul className={classes.meanings}>{definitions}</ul>
      </div>
    </section>
  );
};
export default Verb;
