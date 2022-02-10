import { useRef, useEffect, useState } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";
import useSound from "use-sound";

const Timer = ({ time, setTime, timeRatio, font, theme }) => {
  const [running, setRunning] = useState(false);
  const [playSound] = useSound("/sound/alarm.mp3");
  let intervalId = useRef(null);

  useEffect(() => {
    if (time <= 0) {
      playSound();
      clearInterval(intervalId.current);
    }
  }, [time]);

  useEffect(() => {
    if (timeRatio > 0) {
      clearInterval(intervalId.current);
      setRunning(false);
      setTime(timeRatio);
    }
  }, [timeRatio]);

  return (
    <button
      className={styles.container}
      onClick={() => {
        if (time > 0) {
          if (running) {
            setRunning(false);
            return clearInterval(intervalId.current);
          }
          setRunning(true);
          intervalId.current = setInterval(() => {
            setTime((time) => time - 1);
          }, 1000);
        } else {
          setRunning(false);
          setTime(timeRatio);
        }
      }}
    >
      <div className={styles["content-container"]}>
        <div className={styles.crater}>
          <svg className={styles.progressBar}>
            <circle
              fill="none"
              strokeWidth="11"
              stroke={
                theme === "red"
                  ? "#F87070"
                  : theme === "blue"
                  ? "#70F3F8"
                  : theme === "pink"
                  ? "#D881F8"
                  : null
              }
              strokeLinecap="round"
              strokeDashoffset={Math.PI * 2 * 118.025 * (time / timeRatio)}
            />

            <circle
              fill="none"
              strokeWidth="11"
              stroke={
                theme === "red"
                  ? "#F87070"
                  : theme === "blue"
                  ? "#70F3F8"
                  : theme === "pink"
                  ? "#D881F8"
                  : null
              }
              strokeLinecap="round"
              strokeDashoffset={Math.PI * 2 * 161 * (time / timeRatio)}
            />
          </svg>
        </div>
      </div>

      <div
        className={clsx(
          styles.time,
          styles[
            font === "kumbh"
              ? "kumbh"
              : font === "roboto"
              ? "roboto"
              : font === "space"
              ? "space"
              : null
          ]
        )}
      >
        <p>
          {Math.floor(time / 60)
            .toString()
            .padStart(2, "0")}
          :{(time % 60).toString().padStart(2, "0")}
        </p>

        <p>{time <= 0 ? "RESET" : running ? "PAUSE" : "START"}</p>
      </div>
    </button>
  );
};

export default Timer;
