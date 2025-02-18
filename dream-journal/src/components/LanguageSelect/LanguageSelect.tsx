import { ReactElement } from "react";

import { useTranslation } from "react-i18next";

import Button from "../Button/Button.tsx";

function LanguageSelect(): ReactElement {
  const { i18n, t } = useTranslation();

  return (
    <Button
      variant="solid"
      size="medium"
      onClick={() => i18n.changeLanguage(i18n.language === "en" ? "fa" : "en")}>
      {i18n.language === "en" ? t("farsi") : t("english")}
    </Button>
  );
}

export default LanguageSelect;
