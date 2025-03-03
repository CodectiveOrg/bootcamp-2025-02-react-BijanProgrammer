import { FiltersType } from "../types/filters.type.ts";
import { MovieListItemType } from "../types/movie-list-item.type.ts";

export async function fetchMoviesApi(
  filters: FiltersType,
): Promise<MovieListItemType[]> {
  const response = await fetch(generateUrl(filters));
  const data = await response.json();
  return data.results;
}

function generateUrl(filters: FiltersType): string {
  const params = generateParams(filters);
  return `${import.meta.env.VITE_API_BASE_URL}/search/movie?${params.toString()}`;
}

function generateParams(filters: FiltersType): string {
  const params = new URLSearchParams();

  params.set("query", filters.query);

  filters.genres.forEach((genre) =>
    params.append("genre", genre.id.toString()),
  );

  return params.toString();
}
