import styles from "./index.module.css";

const Radio = ({ radio, setRadio }) => {
  return (
    <div className={styles.container}>
      <input
        type="radio"
        name="pomodoro"
        id="pomodoro"
        checked={radio === "pomodoro"}
        onChange={() => {
          setRadio("pomodoro");
        }}
      />
      <label htmlFor="pomodoro">pomodoro</label>

      <input
        type="radio"
        name="pomodoro"
        id="short-break"
        checked={radio === "short"}
        onChange={() => {
          setRadio("short");
        }}
      />
      <label htmlFor="short-break">short break</label>

      <input
        type="radio"
        name="pomodoro"
        id="long-break"
        checked={radio === "long"}
        onChange={() => {
          setRadio("long");
        }}
      />
      <label htmlFor="long-break">long break</label>
    </div>
  );
};

export default Radio;
