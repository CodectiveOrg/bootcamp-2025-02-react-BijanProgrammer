import { ReactNode } from "react";

function Toolbar(): ReactNode {
  return (
    <div className="toolbar">
      <input type="text" />
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
