(function () {
  class Queue<T> {
    private items: T[] = [];

    public enqueue(item: T): void {
      this.items.push(item);
    }

    public dequeue(): T | undefined {
      if (this.items.length === 0) {
        return undefined;
      }

      const removedItems = this.items.splice(0, 1);
      return removedItems[0];
    }
  }

  class UnknownQueue {
    private items: unknown[] = [];

    public enqueue(item: unknown): void {
      this.items.push(item);
    }

    public dequeue(): unknown | undefined {
      if (this.items.length === 0) {
        return undefined;
      }

      const removedItems = this.items.splice(0, 1);
      return removedItems[0];
    }
  }

  const q1 = new Queue<number>();
  q1.enqueue(1);
  // @ts-expect-error
  q1.enqueue("Bijan");
  // @ts-expect-error
  q1.enqueue(true);
  q1.enqueue(3);
  const removedItem1 = q1.dequeue();

  const q2 = new Queue<string>();
  q2.enqueue("Bijan");
  q2.enqueue("Reza");
  const removedItem2 = q2.dequeue();

  // const items1: string[] = [];
  // const items2: Array<string> = [];
})();
