import styles from "./index.module.scss";
import clsx from "clsx";

const Radio = ({ radio, setRadio, font, theme }) => {
  return (
    <div
      className={clsx(
        styles.container,
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
      <input
        type="radio"
        name="pomodoro"
        id="pomodoro"
        checked={radio === "pomodoro"}
        onChange={() => {
          setRadio("pomodoro");
        }}
      />
      <label
        className={clsx(
          styles.label,
          styles[
            theme === "red" ? "red" : theme === "blue" ? "blue" : theme === "pink" ? "pink" : null
          ]
        )}
        htmlFor="pomodoro"
      >
        pomodoro
      </label>

      <input
        type="radio"
        name="pomodoro"
        id="short-break"
        checked={radio === "short"}
        onChange={() => {
          setRadio("short");
        }}
      />
      <label
        className={clsx(
          styles.label,
          styles[
            theme === "red" ? "red" : theme === "blue" ? "blue" : theme === "pink" ? "pink" : null
          ]
        )}
        htmlFor="short-break"
      >
        short break
      </label>

      <input
        type="radio"
        name="pomodoro"
        id="long-break"
        checked={radio === "long"}
        onChange={() => {
          setRadio("long");
        }}
      />
      <label
        className={clsx(
          styles.label,
          styles[
            theme === "red" ? "red" : theme === "blue" ? "blue" : theme === "pink" ? "pink" : null
          ]
        )}
        htmlFor="long-break"
      >
        long break
      </label>
    </div>
  );
};

export default Radio;
