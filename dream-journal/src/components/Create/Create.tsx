import { ReactElement, useEffect, useRef } from "react";

import Button from "../Button/Button.tsx";
import TextInput from "../TextInput/TextInput.tsx";

import MingcuteAddLine from "../../icons/MingcuteAddLine.tsx";

import styles from "./Create.module.css";

export default function Create(): ReactElement {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const addButtonClickHandler = (): void => {
    dialogRef.current?.showModal();
  };

  const cancelButtonClickHandler = (): void => {
    dialogRef.current?.close();
  };

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    <div className={styles.create}>
      <Button size="large" shape="circle" onClick={addButtonClickHandler}>
        <MingcuteAddLine />
      </Button>
      <dialog ref={dialogRef}>
        <div className={styles.content}>
          <div className={styles.title}>Create a New Dream</div>
          <TextInput placeholder="Input your title..." />
          <div className={styles.actions}>
            <Button
              type="button"
              variant="outlined"
              onClick={cancelButtonClickHandler}
            >
              Cancel
            </Button>
            <Button>Apply</Button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
