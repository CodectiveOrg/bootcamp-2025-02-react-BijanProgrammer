import { ReactElement } from "react";

import { Attraction } from "../../../../types/attraction.ts";

import styles from "./AttractionBody.module.css";

type Props = {
  attraction: Attraction;
};

function AttractionBody({ attraction }: Props): ReactElement {
  return (
    <div className={styles["attraction-body"]}>
      <div dangerouslySetInnerHTML={{ __html: attraction.body }} />
    </div>
  );
}

export default AttractionBody;
