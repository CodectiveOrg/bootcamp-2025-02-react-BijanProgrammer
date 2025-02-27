import { ReactElement } from "react";

import AttractionList from "../../components/AttractionList/AttractionList.tsx";
import Filters from "../../components/Filters/Filters.tsx";

import AttractionsProvider from "../../providers/AttractionsProvider.tsx";
import FiltersProvider from "../../providers/FiltersProvider.tsx";

import styles from "./Home.module.css";

function Home(): ReactElement {
  return (
    <FiltersProvider>
      <AttractionsProvider>
        <div className={styles.home}>
          <Filters />
          <AttractionList />
        </div>
      </AttractionsProvider>
    </FiltersProvider>
  );
}

export default Home;
