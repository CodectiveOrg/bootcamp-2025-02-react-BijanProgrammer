import { ReactElement } from "react";

import styles from "./footer.module.css";

function FooterComponent(): ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <span>تمامی حقوق مادی و معنوی این وب‌سایت متعلق به من می‌باشد.</span>
      <span>Copyright © {year}</span>
    </footer>
  );
}

export default FooterComponent;
