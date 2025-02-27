import { ReactElement, useContext } from "react";

import AttractionListItem from "../AttractionListItem/AttractionListItem.tsx";

import { AttractionsContext } from "../../context/attractions-context.ts";

import styles from "./AttractionList.module.css";

function AttractionList(): ReactElement {
  const { filteredAttractions } = useContext(AttractionsContext);

  return (
    <ul className={styles["attraction-list"]}>
      {filteredAttractions.map((attraction) => (
        <AttractionListItem key={attraction.id} attraction={attraction} />
      ))}
    </ul>
  );
}

export default AttractionList;
