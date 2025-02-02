import { reverseArray } from "./task-2/reverse-array";
import { countNumbers } from "./task-2/count-numbers";
import { sortEntities } from "./task-2/sort-entities";
import { Entity } from "./task-2/entity";

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

function testSortEntities(): void {
  const entities: Entity[] = [
    { createdAt: "2025-02-02T00:00:00.000Z" },
    {
      createdAt: "2025-01-31T00:00:00.000Z",
      modifiedAt: "2025-02-03T00:00:00.000Z",
      name: "bijan",
    },
  ];

  const sortedEntities = sortEntities(entities);

  console.log(sortedEntities);
}

function main(): void {
  testReverseArray();
  testCountNumbers();
  testSortEntities();
}

main();
