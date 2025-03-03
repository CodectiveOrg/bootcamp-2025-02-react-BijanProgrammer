import { FiltersType } from "../types/filters.type.ts";
import { MovieType } from "../types/movie.type.ts";

export async function fetchMoviesApi(
  filters: FiltersType,
): Promise<MovieType[]> {
  const params = new URLSearchParams();
  filters.genres.forEach((genre) =>
    params.append("genre", genre.id.toString()),
  );

  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/movie?${params.toString()}`,
  );

  return await response.json();
}
