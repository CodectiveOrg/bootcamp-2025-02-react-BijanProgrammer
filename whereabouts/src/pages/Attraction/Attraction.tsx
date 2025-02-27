import { ReactElement, useEffect, useState } from "react";

import { useParams } from "react-router";

import { Attraction as AttractionType } from "../../types/attraction.ts";

import AttractionSidebar from "./components/AttractionSidebar/AttractionSidebar.tsx";
import Carousel from "./components/Carousel/Carousel.tsx";
import AttractionBody from "./components/AttractionBody/AttractionBody.tsx";

import styles from "./Attraction.module.css";

function Attraction(): ReactElement {
  const { id } = useParams();

  const [attraction, setAttraction] = useState<AttractionType>();

  useEffect(() => {
    const fetchAttraction = async (): Promise<void> => {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/attraction/${id}`,
      );
      const data = await response.json();

      setAttraction(data);
    };

    fetchAttraction().then();
  }, [id]);

  if (!attraction) {
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
