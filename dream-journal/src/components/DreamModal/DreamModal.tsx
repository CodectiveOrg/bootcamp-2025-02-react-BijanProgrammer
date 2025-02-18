import { forwardRef, ReactElement, useImperativeHandle, useRef } from "react";

import DreamForm from "../DreamForm/DreamForm.tsx";

import { Dream } from "../../types/dream.ts";

import styles from "./DreamModal.module.css";

export type DreamModalRef = Pick<HTMLDialogElement, "showModal" | "close">;

type Props = {
  editingDream?: Dream;
};

const DreamModal = forwardRef<DreamModalRef, Props>(function DreamModal(
  { editingDream },
  outerRef,
): ReactElement {
  const innerRef = useRef<HTMLDialogElement>(null);

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
  };

  return (
    <dialog ref={innerRef} className={styles["dream-modal"]}>
      <DreamForm
        editingDream={editingDream}
        onCancel={closeModal}
        onSubmit={closeModal}
      />
    </dialog>
  );
});

export default DreamModal;
