import { ReactNode } from "react";
import clsx from "clsx";

import { Dream } from "../../types/dream.ts";

import style from "./Result.module.css";

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
  const isActive = true;

  return (
    <ul className="chiz">
      {dreams.map((dream) => (
        <li
          key={dream.id}
          className={clsx(style.title, "chiz", isActive && style.title)}
        >
          {dream.title}
        </li>
      ))}
    </ul>
  );
}

export default Result;
