import { ReactElement } from "react";

import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router";

import { fetchAttraction } from "../../api/fetch-attraction.ts";

import AttractionSidebar from "./components/AttractionSidebar/AttractionSidebar.tsx";
import Carousel from "./components/Carousel/Carousel.tsx";
import AttractionBody from "./components/AttractionBody/AttractionBody.tsx";

import styles from "./Attraction.module.css";

function Attraction(): ReactElement {
  const { id } = useParams();

  const { data: attraction, isFetching } = useQuery({
    queryKey: ["attraction", id],
    queryFn: () => fetchAttraction(id),
  });

  if (isFetching || !attraction) {
    return <>در حال بارگذاری...</>;
  }

  return (
    <div className={styles.Attraction}>
      <AttractionSidebar attraction={attraction} />
      <Carousel attraction={attraction} />
      <AttractionBody attraction={attraction} />
    </div>
  );
}

export default Attraction;
