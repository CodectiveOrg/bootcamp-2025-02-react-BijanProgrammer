import { ReactElement } from "react";

import TagFilter from "./components/TagFilter/TagFilter.tsx";

import styles from "./Filters.module.css";

function Filters(): ReactElement {
  return (
    <div className={styles.filters}>
      <TagFilter />
    </div>
  );
}

export default Filters;
