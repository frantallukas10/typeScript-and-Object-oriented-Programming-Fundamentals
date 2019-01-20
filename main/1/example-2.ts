function doSomething() {
  /* 
  for (const i = 0; i < 5; i++)  // main.ts:11:28 - error TS2588: Cannot assign to 'i' because it is a constant.
  for (let i = 0; i < 5; i++)  // main.ts:15:29 - error TS2304: Cannot find name 'i'.
  */
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log('Finally: ' + i);
}
doSomething();
