import { ReactElement, useEffect, useMemo, useState } from "react";

import AttractionList from "../../components/AttractionList/AttractionList.tsx";
import Filters from "../../components/Filters/Filters.tsx";

import { Attraction } from "../../types/attraction.ts";
import { Filters as FiltersType } from "../../types/filters.ts";

import styles from "./Home.module.css";

function Home(): ReactElement {
  const [allAttractions, setAllAttractions] = useState<Attraction[]>([]);
  const [filters, setFilters] = useState<FiltersType>({ tags: [] });

  const filteredAttractions = useMemo(() => {
    return allAttractions.filter((attraction) => {
      if (filters.tags.length === 0) {
        return true;
      }

      return attraction.tags.some((tag) =>
        filters.tags.find((x) => x.id === tag.id),
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
    <div className={styles.home}>
      <Filters filters={filters} setFilters={setFilters} />
      <AttractionList attractions={filteredAttractions} />
    </div>
  );
}

export default Home;
