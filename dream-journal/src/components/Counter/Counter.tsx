import { forwardRef, ReactElement, useImperativeHandle, useState } from "react";

import styles from "./Counter.module.css";

export type CounterRef = {
  increment: () => void;
};

const Counter = forwardRef<CounterRef>(function Counter(_, ref): ReactElement {
  const [count, setCount] = useState<number>(0);

  useImperativeHandle(ref, () => ({
    increment: () => {
      setCount((old) => old + 1);
    },
  }));

  return <div className={styles.counter}>Count: {count}</div>;
});

export default Counter;
