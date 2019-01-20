// Access Modifiers
class Point {
  // private x: number; // private defaine what can be show for hints like // point.
  // private y: number; we can define private parameters and dont use it...

  // x? and y? are optional parameters, this is rule by typescript and another languages...
  constructor(private x?: number, private y?: number) {
    this.x = x;
    this.y = y;
  }
  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }
}
let point = new Point(1, 2);
point.draw();
