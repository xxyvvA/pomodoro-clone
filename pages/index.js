import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "../components/Head";
import Radio from "../components/radio";
import Timer from "../components/timer";
import Settings from "../components/settings";

export default function Home() {
  const [radio, setRadio] = useState("pomodoro");
  const [pomodoro, setPomodoro] = useState(0);
  const [short, setShort] = useState(0);
  const [long, setLong] = useState(0);

  return (
    <>
      <Head title={"Pomodoro Clone"} />
      <h1>pomodoro</h1>
      <Radio radio={radio} setRadio={setRadio} />
      <Timer
        time={
          radio === "pomodoro" ? pomodoro : radio === "short" ? short : radio === "long" ? long : 0
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
        radio={radio}
      />
      <Settings setPomodoro={setPomodoro} setShort={setShort} setLong={setLong} />
    </>
  );
}
