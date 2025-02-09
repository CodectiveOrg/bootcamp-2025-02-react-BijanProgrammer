import { ComponentProps, ReactElement } from "react";

import clsx from "clsx";

import styles from "./Button.module.css";

type Variant = "solid" | "outlined";
type Size = "medium" | "large";
type Shape = "rectangle" | "square" | "circle";

type Props = ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
  shape?: Shape;
};

export default function Button({
  variant = "solid",
  size = "medium",
  shape = "rectangle",
  className,
  children,
  ...otherProps
}: Props): ReactElement {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        styles[shape],
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}
