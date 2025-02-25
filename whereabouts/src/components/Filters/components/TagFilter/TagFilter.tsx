import { ReactElement, useState } from "react";

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
      <div className={styles.options}>
        {tags.map((tag) => (
          <label>
            <input
              key={tag.id}
              name="tag-filter"
              type="checkbox"
              checked={selectedTags.includes(tag.id)}
              onChange={() => toggleTag(tag.id)}
            />
            {tag.title}
          </label>
        ))}
      </div>
    </div>
  );
}

export default TagFilter;
