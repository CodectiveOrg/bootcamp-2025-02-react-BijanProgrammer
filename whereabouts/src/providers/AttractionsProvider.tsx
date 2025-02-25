import {
  PropsWithChildren,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";

import { AttractionsContext } from "../context/attractions-context.ts";
import { FiltersContext } from "../context/filters-context.ts";

import { Attraction } from "../types/attraction.ts";

import { filterAttractions } from "../../api/attractions.ts";

type Props = PropsWithChildren;

function AttractionsProvider({ children }: Props): ReactElement {
  const { filters } = useContext(FiltersContext);

  const [filteredAttractions, setFilteredAttractions] = useState<Attraction[]>(
    [],
  );

  useEffect(() => {
    const fetchAttractions = async (): Promise<void> => {
      // const response = await fetch(
      //   `${import.meta.env.VITE_API_BASE_URL}/attractions`,
      // );
      // const data = await response.json();

      const data = await filterAttractions(filters);

      setFilteredAttractions(data);
    };

    fetchAttractions().then();
  }, [filters]);

  return (
    <AttractionsContext.Provider value={{ filteredAttractions }}>
      {children}
    </AttractionsContext.Provider>
  );
}

export default AttractionsProvider;
