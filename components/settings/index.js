import { useRef, useState } from "react";
import styles from "./index.module.scss";

const Settings = ({ setPomodoro, setShort, setLong, font, setFont, theme, setTheme }) => {
  const [fonts, setFonts] = useState(font);
  const [colors, setColors] = useState(theme);
  let pomodoro = useRef(0);
  let short = useRef(0);
  let long = useRef(0);

  return (
    <div
      className={`${styles.container} ${
        styles[
          font === "kumbh"
            ? "kumbh"
            : font === "roboto"
            ? "roboto"
            : font === "space"
            ? "space"
            : null
        ]
      }`}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>Settings</h2>
        <svg className={styles.exit} width="14" height="14">
          <g>
            <path stroke-width="2" stroke="black" d="M1.344,1.344 L12.656,12.656" />
            <path stroke-width="2" stroke="black" d="M12.656,1.344 L1.344,12.656" />
          </g>
        </svg>
      </div>
      <div className={styles.time}>
        <p className={styles.settingHeader}>TIME (MINUTES)</p>
        <div className={styles.times}>
          <div className={styles.input}>
            <p className={styles.timeTitle}>pomodoro</p>
            <input
              type="number"
              className={styles.timeInput}
              placeholder="25"
              id="pomodoro"
              onChange={(event) => {
                pomodoro.current = event.target.value * 60;
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
                short.current = event.target.value * 60;
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
                long.current = event.target.value * 60;
              }}
            />
          </div>
        </div>
      </div>

      <div className={styles.font}>
        <p className={styles.settingHeader}>FONT</p>
        <div className={styles.fonts}>
          <input
            type="radio"
            className={styles.input}
            name="font"
            id="kumbh"
            checked={fonts === "kumbh"}
            onChange={() => {
              setFonts("kumbh");
            }}
          />
          <label className={`${styles.kumbh} ${styles.fontImg}`} htmlFor="kumbh">
            Aa
          </label>

          <input
            type="radio"
            className={styles.input}
            name="font"
            id="roboto"
            checked={fonts === "roboto"}
            onChange={() => {
              setFonts("roboto");
            }}
          />
          <label className={`${styles.roboto} ${styles.fontImg}`} htmlFor="roboto">
            Aa
          </label>

          <input
            type="radio"
            className={styles.input}
            name="font"
            id="space"
            checked={fonts === "space"}
            onChange={() => {
              setFonts("space");
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
            className={styles.input}
            name="color"
            id="red"
            checked={colors === "red"}
            onChange={() => {
              setColors("red");
            }}
          />
          <label className={`${styles.red} ${styles.colorImg}`} htmlFor="red">
            {colors === "red" && (
              <svg width="14" height="11">
                <g>
                  <path fill="none" stroke-width="2" stroke="black" d="M1,6 L5,9.5 L13,1" />
                </g>
              </svg>
            )}
          </label>

          <input
            type="radio"
            className={styles.input}
            name="color"
            id="blue"
            checked={colors === "blue"}
            onChange={() => {
              setColors("blue");
            }}
          />
          <label className={`${styles.blue} ${styles.colorImg}`} htmlFor="blue">
            {colors === "blue" && (
              <svg width="14" height="11">
                <g>
                  <path fill="none" stroke-width="2" stroke="black" d="M1,6 L5,9.5 L13,1" />
                </g>
              </svg>
            )}
          </label>

          <input
            type="radio"
            className={styles.input}
            name="color"
            id="pink"
            checked={colors === "pink"}
            onChange={() => {
              setColors("pink");
            }}
          />
          <label className={`${styles.pink} ${styles.colorImg}`} htmlFor="pink">
            {colors === "pink" && (
              <svg width="14" height="11">
                <g>
                  <path fill="none" stroke-width="2" stroke="black" d="M1,6 L5,9.5 L13,1" />
                </g>
              </svg>
            )}
          </label>
        </div>
      </div>
      <button
        className={
          styles[
            theme === "red" ? "red" : theme === "blue" ? "blue" : theme === "pink" ? "pink" : null
          ]
        }
        onClick={() => {
          setFont(fonts);
          setTheme(colors);
          setPomodoro(pomodoro.current);
          setShort(short.current);
          setLong(long.current);
        }}
      >
        Apply
      </button>
    </div>
  );
};

export default Settings;
