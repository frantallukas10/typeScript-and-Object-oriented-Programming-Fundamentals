// Interfaces
/*
  One of TypeScript’s core principles is that type-checking focuses on the shape that values have. 
  This is sometimes called “duck typing” or “structural subtyping”. 
  In TypeScript, interfaces fill the role of naming these types, 
  and are a powerful way of defining contracts within your code 
  as well as contracts with code outside of your project.
*/
// I use an interfaces to define shape the point of object

interface Point {
  x: number;
  y: number;
}

let drawPoint = (point: Point) => {
  console.log(point.x, point.y);
};

drawPoint({
  x: 1,
  y: 2
});
