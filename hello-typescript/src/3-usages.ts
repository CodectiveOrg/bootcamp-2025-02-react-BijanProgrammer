(function () {
  // Variables
  const name: string = "Bijan";

  // Functions
  function minues1(a: number, b: number): number {
    return a - b;
  }

  // Arrow Functions
  const minues2 = (a: number, b: number): number => {
    return a - b;
  };

  // Classes
  class Circle {
    private radius: number;

    public constructor(r: number) {
      this.radius = r;
    }

    public calculateSurface(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  const c = new Circle(10);
  // @ts-expect-error
  console.log(c.radius);
})();
