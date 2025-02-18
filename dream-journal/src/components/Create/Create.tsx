import { ReactElement, useRef } from "react";

import Button from "../Button/Button.tsx";
import TaskModal, { TaskModalRef } from "../TaskModal/TaskModal.tsx";

import MingcuteAddLine from "../../icons/MingcuteAddLine.tsx";

import styles from "./Create.module.css";

export default function Create(): ReactElement {
  const modalRef = useRef<TaskModalRef>(null);

  const addButtonClickHandler = (): void => {
    modalRef.current?.showModal();
  };

  return (
    <div className={styles.create}>
      <Button size="large" shape="circle" onClick={addButtonClickHandler}>
        <MingcuteAddLine />
      </Button>
      <TaskModal ref={modalRef} />
    </div>
  );
}
