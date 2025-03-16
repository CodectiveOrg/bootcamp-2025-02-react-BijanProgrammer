import { ReactElement } from "react";

import CountComponent from "../../scratches/count/count.component.tsx";
import IncrementComponent from "../../scratches/increment/increment.component.tsx";

import GenreFilterComponent from "./components/genre-filter/genre-filter.component.tsx";

import styles from "./filters.module.css";

function FiltersComponent(): ReactElement {
  return (
    <div className={styles.filters}>
      <GenreFilterComponent />
      <CountComponent />
      <IncrementComponent />
    </div>
  );
}

export default FiltersComponent;
