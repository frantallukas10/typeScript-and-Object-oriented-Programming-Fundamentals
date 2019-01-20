class Point {
  x: number;
  y: number;
  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }
  getDistance = (another: Point) => {
    console.log(another.x, another.y);
  };
}

// let point: Point = new Point();
let point = new Point();
point.x = 1;
point.y = 2;
point.draw();
