import { forwardRef, ReactElement, useImperativeHandle, useState } from "react";

import { useTranslation } from "react-i18next";

import styles from "./Counter.module.css";

export type CounterRef = {
  increment: () => void;
};

const Counter = forwardRef<CounterRef>(function Counter(_, ref): ReactElement {
  const { t } = useTranslation();

  const [count, setCount] = useState<number>(0);

  useImperativeHandle(ref, () => ({
    increment: () => {
      setCount((old) => old + 1);
    },
  }));

  return <div className={styles.counter}>{t("counter.label", { count })}</div>;
});

export default Counter;
