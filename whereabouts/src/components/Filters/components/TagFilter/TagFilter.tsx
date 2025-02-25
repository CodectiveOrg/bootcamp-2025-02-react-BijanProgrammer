import { Dispatch, ReactElement, SetStateAction } from "react";

import { tags } from "../../../../data/tags.ts";

import { Filters as FiltersType } from "../../../../types/filters.ts";

import styles from "./TagFilter.module.css";
import { AttractionTag } from "../../../../types/attraction-tag.ts";

type Props = {
  filters: FiltersType;
  setFilters: Dispatch<SetStateAction<FiltersType>>;
};

function TagFilter({ filters, setFilters }: Props): ReactElement {
  const toggleTag = (tag: AttractionTag): void => {
    setFilters((old) => {
      const index = old.tags.findIndex((x) => x.id === tag.id);

      if (index === -1) {
        return { ...old, tags: [...old.tags, tag] };
      }

      const clone = [...old.tags];
      clone.splice(index, 1);
      return { ...old, tags: clone };
    });
  };

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
