import { ReactElement } from "react";

import Button from "../Button/Button.tsx";

import MingcuteAddLine from "../../icons/MingcuteAddLine.tsx";

import styles from "./Create.module.css";

export default function Create(): ReactElement {
  return (
    <div className={styles.create}>
      <Button size="large" shape="circle">
        <MingcuteAddLine />
      </Button>
    </div>
  );
}
