class Point {
  constructor(private x?: number, private y?: number) {
    // this.x = x; // if we define private before parameter for constructor we dont need repetitive assignment
    // this.y = y; // if we define private before parameter for constructor we dont need repetitive assignment
  }
  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }
  getX() {
    return this.x;
  }
  setX(value: number) {
    if (value < 0) {
      throw new Error('Value cannot be less than 0.');
    }
    this.x = value;
  }
}

// let point: Point = new Point();
let point = new Point(1, 2);
let x = point.getX();
point.setX(10);
point.draw();
