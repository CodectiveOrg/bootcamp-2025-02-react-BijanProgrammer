import { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import styles from "./DateInput.module.css";

type Props = ComponentProps<"input">;

export default function DateInput({
  className,
  ...otherProps
}: Props): ReactNode {
  return (
    <div className={clsx(styles["date-input"], className)}>
      <input type="date" {...otherProps} />
    </div>
  );
}
