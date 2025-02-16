import { ReactElement, useContext, useEffect, useRef } from "react";

import Button from "../Button/Button.tsx";

import { DreamsContext } from "../../context/dreams-context.ts";

import MingcuteAddLine from "../../icons/MingcuteAddLine.tsx";

import CreateForm from "./components/CreateForm/CreateForm.tsx";

import styles from "./Create.module.css";

export default function Create(): ReactElement {
  const { editingDream, setEditingDream } = useContext(DreamsContext);

  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (editingDream) {
      dialogRef.current?.showModal();
    }
  }, [editingDream]);

  const addButtonClickHandler = (): void => {
    dialogRef.current?.showModal();
  };

  const closeModal = (): void => {
    dialogRef.current?.close();
    setEditingDream(null);
  };

  return (
    <div className={styles.create}>
      <Button size="large" shape="circle" onClick={addButtonClickHandler}>
        <MingcuteAddLine />
      </Button>
      <dialog ref={dialogRef}>
        {editingDream && (
          <CreateForm onCancel={closeModal} onSubmit={closeModal} />
        )}
        {!editingDream && (
          <CreateForm onCancel={closeModal} onSubmit={closeModal} />
        )}
      </dialog>
    </div>
  );
}
