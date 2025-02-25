import {
  PropsWithChildren,
  ReactElement,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { AttractionsContext } from "../context/attractions-context.ts";
import { FiltersContext } from "../context/filters-context.ts";

import { Attraction } from "../types/attraction.ts";

type Props = PropsWithChildren;

function AttractionsProvider({ children }: Props): ReactElement {
  const { filters } = useContext(FiltersContext);

  const [allAttractions, setAllAttractions] = useState<Attraction[]>([]);

  const filteredAttractions = useMemo(() => {
    return allAttractions.filter((attraction) => {
      if (filters.tags.length === 0) {
        return true;
      }

      return filters.tags.every((tag) =>
        attraction.tags.find((x) => x.id === tag.id),
      );
    });
  }, [allAttractions, filters]);

  useEffect(() => {
    const fetchAttractions = async (): Promise<void> => {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/attractions`,
      );
      const data = await response.json();
      setAllAttractions(data);
    };

    fetchAttractions().then();
  }, []);

  return (
    <AttractionsContext.Provider value={{ filteredAttractions }}>
      {children}
    </AttractionsContext.Provider>
  );
}

export default AttractionsProvider;
