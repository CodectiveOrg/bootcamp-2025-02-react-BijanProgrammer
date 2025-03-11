import { ComponentProps, ReactElement, forwardRef, ForwardedRef } from "react";

import clsx from "clsx";

import ErrorsComponent from "./components/errors/errors.component.tsx";
import IconButtonComponent from "./components/icon-button/icon-button.component.tsx";

import styles from "./text-input.module.css";

type Props = ComponentProps<"input"> & {
  label: string;
  suffixIcon?: ReactElement;
  onSuffixClick?: () => void;
  errors?: string[];
};

function TextInputComponent(
  { label, suffixIcon, onSuffixClick, errors, className, ...otherProps }: Props,
  ref: ForwardedRef<HTMLInputElement>,
): ReactElement {
  return (
    <div className={clsx(styles["text-input"], className)}>
      <label className={clsx(errors && errors.length > 0 && styles.invalid)}>
        <div className={styles.title}>{label}</div>
        <div className={styles.box}>
          <input ref={ref} type="text" placeholder="" {...otherProps} />
          {suffixIcon && (
            <IconButtonComponent onClick={onSuffixClick}>
              {suffixIcon}
            </IconButtonComponent>
          )}
        </div>
      </label>
      <ErrorsComponent className={styles.errors} errors={errors} />
    </div>
  );
}

export default forwardRef(TextInputComponent);
