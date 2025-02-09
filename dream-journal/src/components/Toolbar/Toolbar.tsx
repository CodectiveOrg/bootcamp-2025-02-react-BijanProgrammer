import { ReactNode } from "react";

import Button from "../Button/Button.tsx";
import Select from "../Select/Select.tsx";
import TextInput from "../TextInput/TextInput.tsx";

import MingcuteSearchLine from "../../icons/MingcuteSearchLine.tsx";

function Toolbar(): ReactNode {
  return (
    <div className="toolbar">
      <TextInput
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
        <MingcuteSearchLine />
      </Button>
    </div>
  );
}

export default Toolbar;
