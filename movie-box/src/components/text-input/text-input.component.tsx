import { ComponentProps, ReactElement } from "react";

import clsx from "clsx";

import IconButtonComponent from "./components/icon-button/icon-button.component.tsx";
import ServerErrorsComponent from "./components/server-errors/server-errors.component.tsx";

import styles from "./text-input.module.css";

type Props = ComponentProps<"input"> & {
  label: string;
  suffixIcon?: ReactElement;
  onSuffixClick?: () => void;
  serverErrors?: string[];
};

export default function TextInputComponent({
  label,
  suffixIcon,
  onSuffixClick,
  serverErrors,
  className,
  ...otherProps
}: Props): ReactElement {
  return (
    <div className={clsx(styles["text-input"], className)}>
      <label
        className={clsx(
          serverErrors && serverErrors.length > 0 && styles.invalid,
        )}
      >
        <div className={styles.title}>{label}</div>
        <div className={styles.box}>
          <input type="text" placeholder="" {...otherProps} />
          {suffixIcon && (
            <IconButtonComponent onClick={onSuffixClick}>
              {suffixIcon}
            </IconButtonComponent>
          )}
        </div>
      </label>
      <ServerErrorsComponent
        className={styles["server-errors"]}
        serverErrors={serverErrors}
      />
    </div>
  );
}
