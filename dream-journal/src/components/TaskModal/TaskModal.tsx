import {
  forwardRef,
  ReactElement,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

import CreateForm from "../Create/components/CreateForm/CreateForm.tsx";

import { DreamsContext } from "../../context/dreams-context.ts";

import styles from "./TaskModal.module.css";

export type TaskModalRef = Pick<HTMLDialogElement, "showModal" | "close">;

const TaskModal = forwardRef<TaskModalRef>(
  function TaskModal(_, outerRef): ReactElement {
    const { editingDream, setEditingDream } = useContext(DreamsContext);

    const innerRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
      if (editingDream) {
        innerRef.current?.showModal();
      }
    }, [editingDream]);

    useImperativeHandle(outerRef, () => ({
      showModal: (): void => {
        innerRef.current?.showModal();
      },
      close: (): void => {
        innerRef.current?.close();
      },
    }));

    const closeModal = (): void => {
      innerRef.current?.close();
      setEditingDream(null);
    };

    return (
      <dialog ref={innerRef} className={styles["task-modal"]}>
        {editingDream && (
          <CreateForm onCancel={closeModal} onSubmit={closeModal} />
        )}
        {!editingDream && (
          <CreateForm onCancel={closeModal} onSubmit={closeModal} />
        )}
      </dialog>
    );
  },
);

export default TaskModal;
