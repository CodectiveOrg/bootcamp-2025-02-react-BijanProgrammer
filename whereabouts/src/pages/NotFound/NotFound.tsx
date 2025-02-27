import { ReactElement } from "react";

import styles from "./NotFound.module.css";

function NotFound(): ReactElement {
  return <div className={styles["not-found"]}>صفحه‌ی مورد نظر پیدا نشد.</div>;
}

export default NotFound;
