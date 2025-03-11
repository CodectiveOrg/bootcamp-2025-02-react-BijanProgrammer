import { ReactElement } from "react";

import ButtonComponent from "../../components/button/button.component.tsx";

import styles from "./dashboard.module.css";

function DashboardPage(): ReactElement {
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <ButtonComponent color="danger">Sign Out</ButtonComponent>
    </div>
  );
}

export default DashboardPage;
