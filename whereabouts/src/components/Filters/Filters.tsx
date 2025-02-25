import { Dispatch, ReactElement, SetStateAction } from "react";

import TagFilter from "./components/TagFilter/TagFilter.tsx";

import { Filters as FiltersType } from "../../types/filters.ts";

import styles from "./Filters.module.css";

type Props = {
  filters: FiltersType;
  setFilters: Dispatch<SetStateAction<FiltersType>>;
};

function Filters({ filters, setFilters }: Props): ReactElement {
  return (
    <div className={styles.filters}>
      <TagFilter filters={filters} setFilters={setFilters} />
    </div>
  );
}

export default Filters;
