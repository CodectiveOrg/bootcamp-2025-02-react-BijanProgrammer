import { ReactNode } from "react";

import { Dream } from "./types/dream.ts";

import "./App.css";

const dreams: Dream[] = [
  {
    id: "1",
    title: "School",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, unde.",
    date: new Date(2025, 0, 14),
    vibe: "good",
  },
];

function App(): ReactNode {
  return (
    <>
      <header>
        <h1>Dream Journal</h1>
      </header>
      <main>
        <div className="toolbar">
          <input type="text" />
          <select>
            <option value="all">All</option>
            <option value="good">Good</option>
            <option value="bad">Bad</option>
          </select>
          <button>.</button>
        </div>
        <ul className="result">
          {dreams.map((dream) => (
            <li>{dream.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
