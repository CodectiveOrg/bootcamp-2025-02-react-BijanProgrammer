import {
  ReactElement,
  useRef,
  FormEvent,
  Dispatch,
  SetStateAction,
} from "react";

import Button from "../Button/Button.tsx";
import DateInput from "../DateInput/DateInput.tsx";
import Select from "../Select/Select.tsx";
import TextArea from "../TextArea/TextArea.tsx";
import TextInput from "../TextInput/TextInput.tsx";

import MingcuteAddLine from "../../icons/MingcuteAddLine.tsx";

import { Dream } from "../../types/dream.ts";
import { Vibe } from "../../types/vibe.ts";

import styles from "./Create.module.css";

type Props = {
  setDreams: Dispatch<SetStateAction<Dream[]>>;
};

export default function Create({ setDreams }: Props): ReactElement {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const addButtonClickHandler = (): void => {
    dialogRef.current?.showModal();
  };

  const cancelButtonClickHandler = (): void => {
    dialogRef.current?.close();
  };

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const dream: Dream = {
      id: "23",
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      date: new Date(formData.get("date") as string),
      vibe: formData.get("vibe") as Vibe,
    };

    setDreams((old) => [...old, dream]);

    dialogRef.current?.close();
  };

  return (
    <div className={styles.create}>
      <Button size="large" shape="circle" onClick={addButtonClickHandler}>
        <MingcuteAddLine />
      </Button>
      <dialog ref={dialogRef}>
        <form className={styles.content} onSubmit={formSubmitHandler}>
          <div className={styles.title}>Create a New Dream</div>
          <TextInput name="title" placeholder="Input your title..." />
          <TextArea
            name="description"
            placeholder="Input your description..."
          />
          <DateInput name="date" />
          <Select
            name="vibe"
            variant="outlined"
            options={[
              { value: "good", label: "😃 Good" },
              { value: "bad", label: "😭 Bad" },
            ]}
          />
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
        </form>
      </dialog>
    </div>
  );
}
