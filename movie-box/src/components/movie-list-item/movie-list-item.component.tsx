import { ReactElement } from "react";

import { Link } from "react-router";

import FluentEmojiStar from "../../icons/FluentEmojiStar.tsx";

import { MovieType } from "../../types/movie.type.ts";

import styles from "./movie-list-item.module.css";

type Props = {
  movie: MovieType;
};

function MovieListItemComponent({ movie }: Props): ReactElement {
  return (
    <li className={styles["movie-list-item"]}>
      <div className={styles.visuals}>
        <img
          className={styles.thumbnail}
          src={`${import.meta.env.VITE_CDN_BASE_URL}/${""}`}
          alt=""
        />
      </div>
      <div className={styles.writings}>
        <Link to={`/movie/${movie.id}`} className={styles.title}>
          {movie.title}
        </Link>
        <div className={styles.ratings}>
          {""} <FluentEmojiStar />
        </div>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: "" }}
        />
      </div>
      <ul className={styles.genres}>
        {movie.genres.map((genre) => (
          <li key={genre.id}>{genre.title}</li>
        ))}
      </ul>
    </li>
  );
}

export default MovieListItemComponent;
