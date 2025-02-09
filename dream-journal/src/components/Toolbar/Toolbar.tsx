import { ReactNode } from "react";

import TextInput from "../TextInput/TextInput.tsx";

import MingcuteSearchLine from "../../icons/MingcuteSearchLine.tsx";

function Toolbar(): ReactNode {
  return (
    <div className="toolbar">
      <TextInput
        suffixIcon={<MingcuteSearchLine />}
        placeholder="Search note..."
      />
      <select>
        <option value="all">All</option>
        <option value="good">Good</option>
        <option value="bad">Bad</option>
      </select>
      <button>.</button>
    </div>
  );
}

export default Toolbar;
