// Access Modifiers
class Point {
  private x: number; // private defaine what can be show for hints like // point.
  private y: number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }
  // public draw() { this is redundant default is public
  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }
}

let point = new Point(1, 2);
point.draw();
