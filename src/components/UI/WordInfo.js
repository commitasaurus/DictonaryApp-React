import React from "react";

import WordSound from "../WordSound/WordSound";
import classes from "./WordInfo.module.css";
const WordInfo = (props) => {
  return (
    <section className={classes.container}>
      <div>
        <h1 className={classes.header}>{props.info.word}</h1>
        <p className={classes.phonetic}>{props.info.phonetic}</p>
      </div>
      <WordSound sound={props.wordSound} />
    </section>
  );
};
export default WordInfo;
