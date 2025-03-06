import { FiltersType } from "../types/filters.type.ts";
import { MovieType } from "../types/movie.type.ts";

export async function fetchMoviesApi(
  filters: FiltersType,
): Promise<MovieType[]> {
  const response = await fetch(generateUrl(filters));
  const data = await response.json();
  return data.results;
}

function generateUrl(filters: FiltersType): string {
  const params = generateParams(filters);
  return `${import.meta.env.VITE_API_BASE_URL}/search/movie?${params}`;
}

function generateParams(filters: FiltersType): string {
  const params = new URLSearchParams();

  params.set("query", filters.query);

  filters.genres.forEach((genre) =>
    params.append("genre", genre.id.toString()),
  );

  return params.toString();
}
