import styles from "./index.module.css";

const Settings = ({ setPomodoro, setShort, setLong }) => {
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
          <p className={`${styles.kumbh} ${styles.fontImg}`}>Aa</p>
          <p className={`${styles.roboto} ${styles.fontImg}`}>Aa</p>
          <p className={`${styles.space} ${styles.fontImg}`}>Aa</p>
        </div>
      </div>

      <div className={styles.color}>
        <p className={styles.settingHeader}>COLOR</p>
        <div className={styles.colors}>
          <div className={styles.colorImg}></div>
          <div className={styles.colorImg}></div>
          <div className={styles.colorImg}></div>
        </div>
      </div>
      <button>Apply</button>
    </div>
  );
};

export default Settings;
