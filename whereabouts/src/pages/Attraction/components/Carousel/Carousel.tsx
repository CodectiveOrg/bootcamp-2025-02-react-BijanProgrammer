import { ReactElement } from "react";

import { Attraction } from "../../../../types/attraction.ts";

import styles from "./Carousel.module.css";

type Props = {
  attraction: Attraction;
};

function Carousel({ attraction }: Props): ReactElement {
  return (
    <div className={styles.carousel}>
      <img
        src={`${import.meta.env.VITE_CDN_BASE_URL}/${attraction.carousel[0]}`}
        alt=""
        height={480}
      />
    </div>
  );
}

export default Carousel;
