import { ReactNode, useState } from "react";

import "./App.css";

function App(): ReactNode {
  return (
    <div>
      <h1>title</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <Counter></Counter>
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

function Counter(): ReactNode {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
