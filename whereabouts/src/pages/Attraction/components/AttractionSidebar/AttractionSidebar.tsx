import { ReactElement } from "react";

import { Attraction } from "../../../../types/attraction.ts";

import MingcutePhoneFill from "../../../../icons/MingcutePhoneFill.tsx";
import MingcuteLocationFill from "../../../../icons/MingcuteLocationFill.tsx";

import styles from "./AttractionSidebar.module.css";

type Props = {
  attraction: Attraction;
};

function AttractionSidebar({ attraction }: Props): ReactElement {
  return (
    <aside className={styles["attraction-sidebar"]}>
      <div className={styles.title}>اطلاعات جاذبه گردشگری</div>
      {attraction.phone && (
        <div className={styles.phone}>
          <MingcutePhoneFill />
          {attraction.phone}
        </div>
      )}
      <div className={styles.address}>
        <MingcuteLocationFill />
        {attraction.address}
      </div>
    </aside>
  );
}

export default AttractionSidebar;
