var Point = /** @class */ (function () {
    function Point() {
        this.getDistance = function (another) {
            console.log(another.x, another.y);
        };
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point;
}());
// let point: Point = new Point();
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
