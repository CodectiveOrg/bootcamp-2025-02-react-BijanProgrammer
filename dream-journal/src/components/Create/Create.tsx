import { ReactElement, useRef } from "react";

import Button from "../Button/Button.tsx";
import CreateForm from "../CreateForm/CreateForm.tsx";

import MingcuteAddLine from "../../icons/MingcuteAddLine.tsx";

import styles from "./Create.module.css";

export default function Create(): ReactElement {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const addButtonClickHandler = (): void => {
    dialogRef.current?.showModal();
  };

  const closeModal = (): void => {
    dialogRef.current?.close();
  };

  return (
    <div className={styles.create}>
      <Button size="large" shape="circle" onClick={addButtonClickHandler}>
        <MingcuteAddLine />
      </Button>
      <dialog ref={dialogRef}>
        <CreateForm onCancel={closeModal} onSubmit={closeModal} />
      </dialog>
    </div>
  );
}
