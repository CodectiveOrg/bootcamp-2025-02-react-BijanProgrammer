import { ReactNode } from "react";

import style from "./Header.module.css";

function Header(): ReactNode {
  return (
    <header className={style.header}>
      <h1>Dream Journal</h1>
    </header>
  );
}

export default Header;
