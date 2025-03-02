import { ReactElement, useContext } from "react";

import { useQuery } from "@tanstack/react-query";

import { fetchAttractions } from "../../api/fetch-attractions.ts";

import { FiltersContext } from "../../context/filters-context.ts";

import AttractionListItem from "../AttractionListItem/AttractionListItem.tsx";

import styles from "./AttractionList.module.css";

function AttractionList(): ReactElement {
  const { filters } = useContext(FiltersContext);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["attractions", filters],
    queryFn: () => fetchAttractions(filters),
  });

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>Error: {error ? error.message : "Unexpected error."}</>;
  }

  if (!data) {
    return <>There is no data.</>;
  }

  return (
    <ul className={styles["attraction-list"]}>
      {data.map((attraction) => (
        <AttractionListItem key={attraction.id} attraction={attraction} />
      ))}
    </ul>
  );
}

export default AttractionList;
