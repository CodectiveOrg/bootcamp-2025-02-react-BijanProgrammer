import { ReactElement } from "react";

import styles from "./Footer.module.css";

function Footer(): ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <span>تمامی حقوق مادی و معنوی این وب‌سایت متعلق به من می‌باشد.</span>
      <span>Copyright © {year}</span>
    </footer>
  );
}

export default Footer;
