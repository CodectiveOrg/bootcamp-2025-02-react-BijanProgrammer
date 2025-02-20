import { ReactNode, useContext } from "react";

import { useTranslation } from "react-i18next";

import Button from "../Button/Button.tsx";
import Select from "../Select/Select.tsx";
import LanguageButton from "../LanguageButton/LanguageButton.tsx";
import TextInput from "../TextInput/TextInput.tsx";

import { ThemeContext } from "../../context/theme-context.ts";

import MingcuteMoonLine from "../../icons/MingcuteMoonLine.tsx";
import MingcuteSunLine from "../../icons/MingcuteSunLine.tsx";
import MingcuteSearchLine from "../../icons/MingcuteSearchLine.tsx";

import styles from "./Toolbar.module.css";

function Toolbar(): ReactNode {
  const { t } = useTranslation();

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.toolbar}>
      <TextInput
        className={styles.input}
        suffixIcon={<MingcuteSearchLine />}
        placeholder={t("toolbar.search.placeholder")}
      />
      <Select
        options={[
          { value: "all", label: t("dreams.form.vibe.all") },
          { value: "good", label: t("dreams.form.vibe.good") },
          { value: "bad", label: t("dreams.form.vibe.bad") },
        ]}
      />
      <LanguageButton />
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
