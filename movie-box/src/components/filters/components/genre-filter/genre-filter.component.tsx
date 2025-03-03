import { ReactElement, useContext } from "react";

import { FiltersContext } from "../../../../context/filters.context.ts";

import { GenreType } from "../../../../types/genre.type.ts";
const genres: GenreType[] = [];

import styles from "./genre-filter.module.css";

function GenreFilterComponent(): ReactElement {
  const { filters, toggleGenre } = useContext(FiltersContext);

  return (
    <div className={styles["genre-filter"]}>
      <div className={styles.title}>برچسب</div>
      <div className={styles.options}>
        {genres.map((genre) => (
          <label key={genre.id}>
            <input
              key={genre.id}
              name="genre-filter"
              type="checkbox"
              checked={!!filters.genres.find((x) => x.id === genre.id)}
              onChange={() => toggleGenre(genre)}
            />
            {genre.title}
          </label>
        ))}
      </div>
    </div>
  );
}

export default GenreFilterComponent;
