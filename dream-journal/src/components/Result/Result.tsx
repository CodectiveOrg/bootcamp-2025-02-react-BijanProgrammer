import { ReactNode, useContext } from "react";

import Button from "../Button/Button.tsx";

import { DreamsContext } from "../../context/dreams-context.ts";

import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line.tsx";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line.tsx";

import styles from "./Result.module.css";

function Result(): ReactNode {
  const { dreams, removeDream } = useContext(DreamsContext);

  return (
    <ul className={styles.result}>
      {dreams.map((dream) => (
        <li key={dream.id}>
          <div className={styles.title}>{dream.title}</div>
          <div className={styles.actions}>
            <Button variant="ghost" size="small" shape="square">
              <MingcuteEdit2Line />
            </Button>
            <Button
              color="danger"
              variant="ghost"
              size="small"
              shape="square"
              onClick={() => removeDream(dream.id)}
            >
              <MingcuteDelete2Line />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Result;
