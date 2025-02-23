import { ReactElement, useState } from "react";

import clsx from "clsx";

import { tags } from "../../../../data/tags.ts";

import styles from "./TagFilter.module.css";

function TagFilter(): ReactElement {
  const [selectedTags, setSelectedTags] = useState<number[]>([]);

  const toggleTag = (id: number): void => {
    setSelectedTags((old) => {
      const index = old.findIndex((x) => x === id);

      if (index === -1) {
        return [...old, id];
      }

      const clone = [...old];
      clone.splice(index, 1);
      return clone;
    });
  };

  return (
    <div className={styles["tag-filter"]}>
      <div className={styles.title}>برچسب</div>
      <ul>
        {tags.map((tag) => (
          <li
            key={tag.id}
            className={clsx(selectedTags.includes(tag.id) && styles.selected)}
            onClick={() => toggleTag(tag.id)}
          >
            {tag.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TagFilter;
