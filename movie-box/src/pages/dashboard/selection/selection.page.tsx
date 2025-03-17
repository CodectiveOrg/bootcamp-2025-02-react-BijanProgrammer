import { ReactElement } from "react";

import { useQuery } from "@tanstack/react-query";

import { fetchSelectionFindAllApi } from "../../../api/fetch-selection-find-all.api.ts";

import LoadingComponent from "../../../components/loading/loading.component.tsx";

import styles from "./selection.module.css";
import { Link } from "react-router";

export default function SelectionPage(): ReactElement {
  const { data, isPending, isError } = useQuery({
    queryKey: ["selections"],
    queryFn: fetchSelectionFindAllApi,
  });

  if (isPending) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <>Something went wrong!</>;
  }

  return (
    <div className={styles.selection}>
      <h1>Selections</h1>
      <ul>
        {data.map((selection) => (
          <li key={selection.id} className="card">
            <div className={styles.name}>{selection.name}</div>
            <div className={styles.description}>{selection.description}</div>
          </li>
        ))}
        <li className={styles.create}>
          <Link to="/dashboard/selection/create">+</Link>
        </li>
      </ul>
    </div>
  );
}
