/*
  1. Tell react variable is changed and you should call the function again
  2. Component should remember variable's previous value (Closure)
*/

function generateCounter() {
  let count = 0;

  const decrement = () => {
    count--;
    console.log(`decremented to ${count}`);
  };

  const increment = () => {
    count++;
    console.log(`incremented to ${count}`);
  };

  const getValue = () => {
    return count;
  };

  return [count, decrement, increment, getValue];
}

function App() {
  let [count, decrement, increment, getValue] = generateCounter();

  setTimeout(() => {
    // Interaction
    increment();
  }, 1000);

  return count;
}

// Initial render
const result1 = App();
console.log(`result1: ${result1}`);

setTimeout(() => {
  // Re-render
  const result2 = App();
  console.log(`result2: ${result2}`);
}, 2000);
