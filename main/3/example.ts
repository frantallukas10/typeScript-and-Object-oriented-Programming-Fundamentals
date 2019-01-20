/*
  Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” 
  A type assertion is like a type cast in other languages, 
  but performs no special checking or restructuring of data. 
  It has no runtime impact, and is used purely by the compiler. 
  TypeScript assumes that you, the programmer, have performed any special checks that you need.
*/
let someValue: any = 'this is a string';
// Type assertions have two forms. One is the “angle-bracket” syntax:
let strLength1: number = (<string>someValue).length;
// And the other is the as-syntax:
let strLength2: number = (someValue as string).length;
