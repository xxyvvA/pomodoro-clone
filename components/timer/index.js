import { useState, useRef, useEffect } from "react";
import styles from "./index.module.css";

const Timer = ({ time, setTime }) => {
  let intervalId = useRef(null);

  useEffect(() => {
    if (time === 0) {
      clearInterval(intervalId.current);
    }
  });

  return (
    <div className={styles.container}>
      <p>
        {Math.floor(time / 60)
          .toString()
          .padStart(2, "0")}
        :
        {Math.floor(time % 60)
          .toString()
          .padStart(2, "0")}
      </p>

      <button
        onClick={() => {
          if (time > 0) {
            intervalId.current = setInterval(() => {
              setTime((time) => time - 1);
            }, 1000);
          }
        }}
      >
        PLAY RESTART PAUSE
      </button>
    </div>
  );
};

export default Timer;
