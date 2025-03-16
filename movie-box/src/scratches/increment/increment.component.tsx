import { ReactElement } from "react";

import { useFiltersStore } from "../../stores/filters.store.ts";

import styles from "./increment.module.css";

export default function IncrementComponent(): ReactElement {
  const increment = useFiltersStore((state) => state.increment);

  return (
    <div className={styles.increment}>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
