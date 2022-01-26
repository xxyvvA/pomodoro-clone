import { useRef, useEffect } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";

const Timer = ({ time, setTime, timeRatio, font, theme }) => {
  let intervalId = useRef(null);

  useEffect(() => {
    if (time === 0) {
      clearInterval(intervalId.current);
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles["content-container"]}>
        <div className={styles.crater}>
          <svg className={styles.progressBar} width="248.05" height="248.05">
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
              cx="124.25"
              cy="124.25"
              r="118.025"
              strokeDasharray={Math.PI * 118.025 * 2}
              strokeDashoffset={Math.PI * 2 * 118.025 * (time / timeRatio)}
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

        <button
          onClick={() => {
            if (time > 0) {
              intervalId.current = setInterval(() => {
                setTime((time) => time - 1);
              }, 1000);
            }
          }}
        >
          START
        </button>
      </div>
    </div>
  );
};

export default Timer;
