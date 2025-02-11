import { ReactNode } from "react";

import Button from "../Button/Button.tsx";
import Select from "../Select/Select.tsx";
import TextInput from "../TextInput/TextInput.tsx";

import MingcuteMoonLine from "../../icons/MingcuteMoonLine.tsx";
import MingcuteSearchLine from "../../icons/MingcuteSearchLine.tsx";

import styles from "./Toolbar.module.css";

function Toolbar(): ReactNode {
  return (
    <div className={styles.toolbar}>
      <TextInput
        className={styles.input}
        suffixIcon={<MingcuteSearchLine />}
        placeholder="Search note..."
      />
      <Select
        options={[
          { value: "all", label: "All" },
          { value: "good", label: "Good" },
          { value: "bad", label: "Bad" },
        ]}
      ></Select>
      <Button variant="solid" size="medium" shape="square">
        <MingcuteMoonLine />
      </Button>
    </div>
  );
}

export default Toolbar;
