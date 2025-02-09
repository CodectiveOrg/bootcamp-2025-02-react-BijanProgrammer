import { ComponentProps, ReactElement } from "react";

import clsx from "clsx";

import { SelectOption } from "../../types/select-option.ts";

import styles from "./Select.module.css";

type Props = ComponentProps<"select"> & {
  options: SelectOption[];
};

export default function Select({
  options,
  ...otherProps
}: Props): ReactElement {
  return (
    <div className={clsx(styles["select"])}>
      <select {...otherProps}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
