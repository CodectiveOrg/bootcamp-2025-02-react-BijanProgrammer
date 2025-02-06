import { ReactNode, useState } from "react";

import "./App.css";

type Theme = "light" | "dark";

function readThemeFromLocalStorage(): Theme {
  console.log("readThemeFromLocalStorage");

  const item = localStorage.getItem("theme");

  if (!item) {
    return "light";
  }

  return item as Theme;
}

function App(): ReactNode {
  console.log("rendering app");

  const [theme, setTheme] = useState<Theme>(readThemeFromLocalStorage);

  const [parentCount, setParentCount] = useState<number>(0);

  return (
    <div>
      <h1>title</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <Counter count={parentCount} setCount={setParentCount}>
        <code>bijan</code>
      </Counter>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

/*
  1. Tell react variable is changed and you should call the function again
  2. Component should remember variable's previous value (Closure)
 */

type Props = {
  children: ReactNode;
  count: number;
  setCount: (x: number) => void;
};

function Counter({ children, count, setCount }: Props): ReactNode {
  console.log("rendering counter");

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Hello, {children}!</h2>
      <div>Count: {count}</div>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
