/*
  Type assertions are a way to tell the compiler “trust me, I know what I’m doing.”
  A type assertion is like a type cast in other languages,
  but performs no special checking or restructuring of data.
  It has no runtime impact, and is used purely by the compiler.
  TypeScript assumes that you, the programmer, have performed any special checks that you need.
*/
var someValue = 'this is a string';
// Type assertions have two forms. One is the “angle-bracket” syntax:
var strLength1 = someValue.length;
// And the other is the as-syntax:
var strLength2 = someValue.length;
