import { reverseArray } from "./task-2/reverse-array";
import { countNumbers } from "./task-2/count-numbers";

function testReverseArray(): void {
  const items = [1, "Bijan", 3, true];
  const reversedItems = reverseArray(items);
  console.log(reversedItems);
}

function testCountNumbers(): void {
  const items = [1, "Bijan", 3, true];
  const count = countNumbers(items);
  console.log(count);
}

function main(): void {
  testReverseArray();
  testCountNumbers();
}

main();
