import { ComponentProps, ReactElement, forwardRef, ForwardedRef } from "react";

import clsx from "clsx";

import styles from "./text-input.module.css";

type Props = ComponentProps<"input"> & {
  label: string;
  suffixIcon?: ReactElement;
  onSuffixClick?: () => void;
};

function TextInputComponent(
  { label, suffixIcon, onSuffixClick, className, ...otherProps }: Props,
  ref: ForwardedRef<HTMLInputElement>,
): ReactElement {
  return (
    <label className={clsx(styles["text-input"], className)}>
      <div className={styles.title}>{label}</div>
      <div className={styles.box}>
        <input ref={ref} type="text" placeholder="" {...otherProps} />
        {suffixIcon && (
          <button
            type="button"
            className={styles.suffix}
            onClick={onSuffixClick}
          >
            {suffixIcon}
          </button>
        )}
      </div>
    </label>
  );
}

export default forwardRef(TextInputComponent);
