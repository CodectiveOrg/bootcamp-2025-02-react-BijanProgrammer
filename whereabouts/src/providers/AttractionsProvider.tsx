import { PropsWithChildren, ReactElement, useContext } from "react";

import { AttractionsContext } from "../context/attractions-context.ts";
import { FiltersContext } from "../context/filters-context.ts";

import { useQuery } from "@tanstack/react-query";
import { fetchAttractions } from "../api/fetch-attractions.ts";

type Props = PropsWithChildren;

function AttractionsProvider({ children }: Props): ReactElement {
  const { filters } = useContext(FiltersContext);

  const { data: attractions } = useQuery({
    queryKey: ["attractions", filters],
    queryFn: () => fetchAttractions(filters),
    initialData: [],
  });

  return (
    <AttractionsContext.Provider value={{ filteredAttractions: attractions }}>
      {children}
    </AttractionsContext.Provider>
  );
}

export default AttractionsProvider;
