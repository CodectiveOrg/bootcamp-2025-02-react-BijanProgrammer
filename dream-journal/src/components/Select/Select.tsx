import { ComponentProps, ReactElement, forwardRef, ForwardedRef } from "react";

import clsx from "clsx";

import { SelectOption } from "../../types/select-option.ts";

import styles from "./Select.module.css";

type Variant = "solid" | "outlined";

type Props = ComponentProps<"select"> & {
  variant?: Variant;
  options: SelectOption[];
};

function Select(
  { variant = "solid", options, ...otherProps }: Props,
  ref: ForwardedRef<HTMLSelectElement>,
): ReactElement {
  return (
    <div className={clsx(styles["select"], styles[variant])}>
      <select ref={ref} {...otherProps}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(Select);
