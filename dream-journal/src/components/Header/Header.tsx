import { ReactNode } from "react";

import style from "./Header.module.css";

function Header(): ReactNode {
  return (
    <header>
      <h1 className={style.title}>Dream Journal</h1>
    </header>
  );
}

export default Header;
