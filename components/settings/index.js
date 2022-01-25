import styles from "./index.module.css";

const Settings = ({ setPomodoro, setShort, setLong, font, setFont, theme, setTheme }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Settings</h2>
      </div>
      <div className={styles.time}>
        <p className={styles.settingHeader}>TIME (MINUTES)</p>

        <div className={styles.input}>
          <p className={styles.timeTitle}>pomodoro</p>
          <input
            type="number"
            className={styles.timeInput}
            placeholder="25"
            id="pomodoro"
            onChange={(event) => {
              setPomodoro(event.target.value * 60);
            }}
          />
        </div>

        <div className={styles.input}>
          <p className={styles.timeTitle}>short break</p>
          <input
            type="number"
            className={styles.timeInput}
            placeholder="5"
            id="short-break"
            onChange={(event) => {
              setShort(event.target.value * 60);
            }}
          />
        </div>

        <div className={styles.input}>
          <p className={styles.timeTitle}>long break</p>
          <input
            type="number"
            className={styles.timeInput}
            placeholder="15"
            id="long-break"
            onChange={(event) => {
              setLong(event.target.value * 60);
            }}
          />
        </div>
      </div>
      <div className={styles.font}>
        <p className={styles.settingHeader}>FONT</p>
        <div className={styles.fonts}>
          <input
            type="radio"
            className={styles.fontInput}
            name="font"
            id="kumbh"
            checked={font === "kumbh"}
            onChange={() => {
              setFont("kumbh");
            }}
          />
          <label className={`${styles.kumbh} ${styles.fontImg}`} htmlFor="kumbh">
            Aa
          </label>

          <input
            type="radio"
            className={styles.fontInput}
            name="font"
            id="roboto"
            checked={font === "roboto"}
            onChange={() => {
              setFont("roboto");
            }}
          />
          <label className={`${styles.roboto} ${styles.fontImg}`} htmlFor="roboto">
            Aa
          </label>

          <input
            type="radio"
            className={styles.fontInput}
            name="font"
            id="space"
            checked={font === "space"}
            onChange={() => {
              setFont("space");
            }}
          />
          <label className={`${styles.space} ${styles.fontImg}`} htmlFor="space">
            Aa
          </label>
        </div>
      </div>
      <div className={styles.color}>
        <p className={styles.settingHeader}>COLOR</p>
        <div className={styles.colors}>
          <input
            type="radio"
            className={styles.colorInput}
            name="color"
            id="red"
            checked={theme === "red"}
            onChange={() => {
              setTheme("red");
            }}
          />
          <label className={`${styles.red} ${styles.colorImg}`} htmlFor="red"></label>

          <input
            type="radio"
            className={styles.colorInput}
            name="color"
            id="blue"
            checked={theme === "blue"}
            onChange={() => {
              setTheme("blue");
            }}
          />
          <label className={`${styles.blue} ${styles.colorImg}`} htmlFor="blue"></label>

          <input
            type="radio"
            className={styles.colorInput}
            name="color"
            id="purple"
            checked={theme === "purple"}
            onChange={() => {
              setTheme("purple");
            }}
          />
          <label className={`${styles.purple} ${styles.colorImg}`} htmlFor="purple"></label>
        </div>
      </div>
      <button>Apply</button>
    </div>
  );
};

export default Settings;
