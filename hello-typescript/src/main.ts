import { reverseArray } from "./task-2/reverse-array";

function testReverseArray(): void {
  const items = [1, "Bijan", 3, true];
  const reversedItems = reverseArray(items);
  console.log(reversedItems);
}

function main(): void {
  testReverseArray();
}

main();
