import { AttractionTag } from "../src/types/attraction-tag";
import { Attraction } from "../src/types/attraction";
import { Filters } from "../src/types/filters.ts";

export async function filterAttractions(
  filters: Filters,
): Promise<Attraction[]> {
  const response = await fetch(`http://localhost:3000/attractions`);
  const allAttractions = await response.json();

  return allAttractions.filter((attraction) => {
    if (filters.tags.length === 0) {
      return true;
    }

    return filters.tags.every((tag) =>
      attraction.tags.find((x) => x.id === tag.id),
    );
  });
}
