import { ComponentProps, ForwardedRef, forwardRef, ReactNode } from "react";

import clsx from "clsx";

import styles from "./DateInput.module.css";

type Props = ComponentProps<"input">;

function DateInput(
  { className, ...otherProps }: Props,
  ref: ForwardedRef<HTMLInputElement>,
): ReactNode {
  return (
    <div className={clsx(styles["date-input"], className)}>
      <input ref={ref} type="date" {...otherProps} />
    </div>
  );
}

export default forwardRef(DateInput);
