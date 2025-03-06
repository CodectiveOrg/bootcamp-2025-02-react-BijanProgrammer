import { FormEvent, ReactElement, useContext } from "react";

import ButtonComponent from "../../../button/button.component.tsx";
import TextInputComponent from "../../../text-input/text-input.component.tsx";

import { FiltersContext } from "../../../../context/filters.context.ts";

import FilterCardComponent from "../filter-card/filter-card.component.tsx";

import styles from "./query-filter.module.css";

export default function QueryFilterComponent(): ReactElement {
  const { filters, updateQuery } = useContext(FiltersContext);

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    updateQuery(formData.get("query") as string);
  };

  return (
    <FilterCardComponent title="Query">
      <form className={styles["query-filter"]} onSubmit={formSubmitHandler}>
        <TextInputComponent
          name="query"
          placeholder="Movie title, actor, ..."
          defaultValue={filters.query}
        />
        <ButtonComponent>Search</ButtonComponent>
      </form>
    </FilterCardComponent>
  );
}
