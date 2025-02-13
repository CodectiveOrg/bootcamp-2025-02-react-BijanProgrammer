import { ReactNode } from "react";

import Button from "../Button/Button.tsx";

import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line.tsx";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line.tsx";

import { Dream } from "../../types/dream.ts";

import styles from "./Result.module.css";

type Props = {
  dreams: Dream[];
};

function Result({ dreams }: Props): ReactNode {
  return (
    <ul className={styles.result}>
      {dreams.map((dream) => (
        <li key={dream.id}>
          <div className={styles.title}>{dream.title}</div>
          <div className={styles.actions}>
            <Button variant="ghost" size="small" shape="square">
              <MingcuteEdit2Line />
            </Button>
            <Button color="danger" variant="ghost" size="small" shape="square">
              <MingcuteDelete2Line />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Result;
