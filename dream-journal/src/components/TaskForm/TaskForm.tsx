import { FormEvent, ReactElement, useContext } from "react";

import TextInput from "../TextInput/TextInput.tsx";
import TextArea from "../TextArea/TextArea.tsx";
import DateInput from "../DateInput/DateInput.tsx";
import Select from "../Select/Select.tsx";
import Button from "../Button/Button.tsx";

import { DreamsContext } from "../../context/dreams-context.ts";

import { Dream } from "../../types/dream.ts";
import { Vibe } from "../../types/vibe.ts";

import styles from "./TaskForm.module.css";

type Props = {
  editingDream?: Dream;
  onCancel: VoidFunction;
  onSubmit: VoidFunction;
};

export default function TaskForm({
  editingDream,
  onCancel,
  onSubmit,
}: Props): ReactElement {
  const { createDream, editDream } = useContext(DreamsContext);

  const cancelButtonClickHandler = (): void => {
    onCancel();
  };

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const dream: Dream = {
      id: editingDream?.id ?? crypto.randomUUID(),
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      date: new Date(formData.get("date") as string),
      vibe: formData.get("vibe") as Vibe,
    };

    if (editingDream) {
      editDream(dream);
    } else {
      createDream(dream);
    }

    onSubmit();
  };

  return (
    <form className={styles["create-form"]} onSubmit={formSubmitHandler}>
      <div className={styles.title}>
        {editingDream ? `Edit ${editingDream.title}` : "Create a New Dream"}
      </div>
      <TextInput
        name="title"
        placeholder="Input your title..."
        defaultValue={editingDream?.title}
      />
      <TextArea
        name="description"
        placeholder="Input your description..."
        defaultValue={editingDream?.description}
      />
      <DateInput name="date" defaultValue={toDateString(editingDream?.date)} />
      <Select
        name="vibe"
        variant="outlined"
        options={[
          { value: "good", label: "😃 Good" },
          { value: "bad", label: "😭 Bad" },
        ]}
        defaultValue={editingDream?.vibe}
      />
      <div className={styles.actions}>
        <Button
          type="button"
          variant="outlined"
          onClick={cancelButtonClickHandler}
        >
          Cancel
        </Button>
        <Button>{editingDream ? "Edit" : "Submit"}</Button>
      </div>
    </form>
  );
}

function toDateString(date: Date | undefined): string {
  if (!date) {
    return "";
  }

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function pad(text: number): string {
  return text.toString().padStart(2, "0");
}
