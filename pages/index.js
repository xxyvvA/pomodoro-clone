import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Head from "../components/Head";
import Radio from "../components/radio";
import Timer from "../components/timer";
import Settings from "../components/settings";

export default function Home() {
  const [radio, setRadio] = useState("pomodoro");
  const [pomodoro, setPomodoro] = useState(25 * 60);
  const [short, setShort] = useState(5 * 60);
  const [long, setLong] = useState(15 * 60);
  const [font, setFont] = useState("kumbh");
  const [theme, setTheme] = useState("red");
  const [open, setOpen] = useState(false);
  const [userPom, setUserPom] = useState(25 * 60);
  const [userShort, setUserShort] = useState(5 * 60);
  const [userLong, setUserLong] = useState(15 * 60);

  return (
    <>
      <Head title={"Pomodoro Clone"} />
      <div className={styles.container}>
        <h1 className={styles["main-timer"]}>pomodoro</h1>
        <Radio radio={radio} setRadio={setRadio} font={font} theme={theme} />
        <Timer
          time={
            radio === "pomodoro"
              ? pomodoro
              : radio === "short"
              ? short
              : radio === "long"
              ? long
              : 0
          }
          setTime={
            radio === "pomodoro"
              ? setPomodoro
              : radio === "short"
              ? setShort
              : radio === "long"
              ? setLong
              : 0
          }
          timeRatio={
            radio === "pomodoro"
              ? userPom
              : radio === "short"
              ? userShort
              : radio === "long"
              ? userLong
              : null
          }
          font={font}
          theme={theme}
        />
        <Settings
          setPomodoro={setPomodoro}
          setShort={setShort}
          setLong={setLong}
          font={font}
          setFont={setFont}
          theme={theme}
          setTheme={setTheme}
          open={open}
          setOpen={setOpen}
          userPom={userPom}
          setUserPom={setUserPom}
          userShort={userShort}
          setUserShort={setUserShort}
          userLong={userLong}
          setUserLong={setUserLong}
        />
        <button
          className={styles["open-settings"]}
          onClick={() => {
            setOpen(true);
          }}
        >
          <img src="../img/Shape 2.png" />
        </button>
      </div>
    </>
  );
}
