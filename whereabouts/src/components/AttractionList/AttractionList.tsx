import { ReactElement, useContext } from "react";

import { useQuery } from "@tanstack/react-query";

import { fetchAttractions } from "../../api/fetch-attractions.ts";

import { FiltersContext } from "../../context/filters-context.ts";

import AttractionListItem from "../AttractionListItem/AttractionListItem.tsx";

import styles from "./AttractionList.module.css";

function AttractionList(): ReactElement {
  const { filters } = useContext(FiltersContext);

  const { data } = useQuery({
    queryKey: ["attractions", filters],
    queryFn: () => fetchAttractions(filters),
    initialData: [],
  });

  return (
    <ul className={styles["attraction-list"]}>
      {data.map((attraction) => (
        <AttractionListItem key={attraction.id} attraction={attraction} />
      ))}
    </ul>
  );
}

export default AttractionList;
