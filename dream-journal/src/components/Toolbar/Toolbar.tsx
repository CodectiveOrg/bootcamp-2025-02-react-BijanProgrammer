import { ReactNode, useContext } from "react";

import Button from "../Button/Button.tsx";
import Select from "../Select/Select.tsx";
import TextInput from "../TextInput/TextInput.tsx";

import { ThemeContext } from "../../context/theme-context.ts";

import MingcuteMoonLine from "../../icons/MingcuteMoonLine.tsx";
import MingcuteSunLine from "../../icons/MingcuteSunLine.tsx";
import MingcuteSearchLine from "../../icons/MingcuteSearchLine.tsx";

import styles from "./Toolbar.module.css";

function Toolbar(): ReactNode {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.toolbar}>
      <TextInput
        className={styles.input}
        suffixIcon={<MingcuteSearchLine />}
        placeholder="Search Dream..."
      />
      <Select
        options={[
          { value: "all", label: "All" },
          { value: "good", label: "Good" },
          { value: "bad", label: "Bad" },
        ]}
      ></Select>
      <Button
        variant="solid"
        size="medium"
        shape="square"
        onClick={() => toggleTheme()}
      >
        {theme === "light" ? <MingcuteMoonLine /> : <MingcuteSunLine />}
      </Button>
    </div>
  );
}

export default Toolbar;
