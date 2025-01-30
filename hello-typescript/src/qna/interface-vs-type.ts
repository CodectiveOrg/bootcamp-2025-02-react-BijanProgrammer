(function () {
  /*
        Circle
        Rectangle
        Triangle
     */

  interface Shape {
    calculateSurface: () => number;
    calculatePerimeter: () => number;
  }

  class Circle implements Shape {
    constructor(private radius: number) {}

    calculateSurface(): number {
      return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
      return 2 * Math.PI * this.radius;
    }
  }

  class Rectangle implements Shape {
    constructor(
      private width: number,
      private height: number,
    ) {}

    calculateSurface(): number {
      return this.width * this.height;
    }

    calculatePerimeter(): number {
      return 2 * (this.width + this.height);
    }
  }

  const shape1: Shape = new Circle(10);
  const shape2: Shape = new Rectangle(23, 42);

  console.log(shape1.calculateSurface());

  const shapes: Shape[] = [new Circle(10), new Rectangle(23, 42)];

  shapes.forEach((shape) => {
    console.log(shape.calculatePerimeter);
  });

  type ChizType = string | number;

  interface ChizInterface {
    value: string | number;
  }

  const chizTypeVariable: ChizType = "Bijan";

  const chizInterfaceVariable: ChizInterface = {
    value: "Bijan",
  };

  type ShapeType = {
    calculateSurface: () => number;
    calculatePerimeter: () => number;
  };
})();
