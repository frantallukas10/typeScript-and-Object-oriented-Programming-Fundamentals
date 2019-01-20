class Point {
  x: number;
  y: number;

  // x? and y? are optional parameters, this is rule by typescript and another languages...
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }
  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }
}

// let point: Point = new Point();
let point = new Point();
point.draw();
