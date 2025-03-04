import { ReactElement, useContext } from "react";

import { FiltersContext } from "../../../../context/filters-context.ts";

import { tags } from "../../../../data/tags.ts";

import styles from "./TagFilter.module.css";

let count = 0;

function TagFilter(): ReactElement {
  console.log("rendering TagFilter");

  const { filters, toggleTag } = useContext(FiltersContext);

  if (count <= 4) {
    count++;
    throw new Error("Chiz");
  }

  return (
    <div className={styles["tag-filter"]}>
      <div className={styles.title}>برچسب</div>
      <div className={styles.options}>
        {tags.map((tag) => (
          <label key={tag.id}>
            <input
              key={tag.id}
              name="tag-filter"
              type="checkbox"
              checked={!!filters.tags.find((x) => x.id === tag.id)}
              onChange={() => toggleTag(tag)}
            />
            {tag.title}
          </label>
        ))}
      </div>
    </div>
  );
}

export default TagFilter;
