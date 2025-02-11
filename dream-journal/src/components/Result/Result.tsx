import { ReactNode } from "react";

import Button from "../Button/Button.tsx";

import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line.tsx";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line.tsx";

import { Dream } from "../../types/dream.ts";

import styles from "./Result.module.css";

const dreams: Dream[] = [
  {
    id: "1",
    title: "School 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, unde.",
    date: new Date(2025, 0, 14),
    vibe: "good",
  },

  {
    id: "2",
    title: "School 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, unde.",
    date: new Date(2025, 0, 14),
    vibe: "good",
  },
  {
    id: "3",
    title: "School 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, unde.",
    date: new Date(2025, 0, 14),
    vibe: "good",
  },
];

function Result(): ReactNode {
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
