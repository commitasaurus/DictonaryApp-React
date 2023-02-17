import React from "react";
import classes from "./WordSound.module.css";
const WordSound = (props) => {
  return (
    <div className={classes.container}>
      <p></p>
      {/* <audio controls className={classes.audio}>
        <source
          src="https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio> */}
    </div>
  );
};

export default WordSound;
