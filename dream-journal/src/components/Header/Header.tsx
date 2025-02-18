import { ReactNode } from "react";

import styles from "./Header.module.css";

function Header(): ReactNode {
  return (
    <header className={styles.header}>
      <h1>Dream Journal</h1>
    </header>
  );
}

export default Header;
