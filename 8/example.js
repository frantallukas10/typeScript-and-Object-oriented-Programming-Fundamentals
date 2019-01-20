var Point = /** @class */ (function() {
  // x? and y? are optional parameters
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  Point.prototype.draw = function() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  };
  return Point;
})();
// let point: Point = new Point();
var point = new Point();
point.draw();
