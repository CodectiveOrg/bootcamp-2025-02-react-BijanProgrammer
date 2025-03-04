import { ChangeEvent, ReactElement, useState, useTransition } from "react";

import styles from "./Transition.module.css";

const ITEMS_COUNT = 20000;

function Transition(): ReactElement {
  const [inputValue, setInputValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

  const [isPending, startTransition] = useTransition();

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);

    startTransition(() => {
      const list = [];
      for (let i = 0; i < ITEMS_COUNT; i++) {
        list.push(`${i + 1}. ${e.target.value}`);
      }

      setItems(list);
    });
  };

  return (
    <div className={styles.transition}>
      <h1>useTransition Hook</h1>
      <form>
        <label>
          یه چیزی بنویسید:
          <input type="text" value={inputValue} onChange={inputChangeHandler} />
        </label>
      </form>
      <section>
        <h2>
          نتایج
          {isPending ? " (در حال به‌روزرسانی)" : ""}
        </h2>
        <ul className={styles.result}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Transition;
