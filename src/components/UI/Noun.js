import React from "react";
import classes from "./Speech.module.css";
const Noun = (props) => {
  const word = props.wordInfo;
  const synonyms = word.synonyms.map((el) => (
    <p key={Math.random()} className={classes.synonym}>
      {el}
    </p>
  ));
  const definitions = word.definitions.map((el) => {
    return <li key={Math.random()}>{el.definition}</li>;
  });
  return (
    <section>
      <h3 className={classes.header}>noun</h3>
      <div>
        <p className={classes["sub-header"]}>Meaning</p>
        <ul className={classes.meanings}>{definitions}</ul>
        {word.synonyms.length ? (
          <div className={classes["synonyms-container"]}>
            <p className={classes["sub-header"]}>Synonyms</p>
            {synonyms}
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};
export default Noun;
