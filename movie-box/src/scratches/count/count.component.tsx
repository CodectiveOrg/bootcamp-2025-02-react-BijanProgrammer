import { ReactElement } from "react";

import { useFiltersStore } from "../../stores/filters.store.ts";

import styles from "./count.module.css";

export default function CountComponent(): ReactElement {
  const count = useFiltersStore((state) => state.count);

  return <div className={styles.count}>{count}</div>;
}
