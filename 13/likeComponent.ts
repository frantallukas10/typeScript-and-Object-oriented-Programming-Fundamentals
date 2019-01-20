export class LikeComponent {
  constructor(private _likesCount?: number, private _isSelected?: boolean) {}
  onClick() {
    // if (this.isSelected) {
    //   this.likesCount--;
    // } else {
    //   this.likesCount++;
    // }
    // cleaner
    this._likesCount += this._isSelected ? -1 : +1;
    this._isSelected = !this._isSelected;
  }

  get likesCount() {
    return this._likesCount;
  }
  get isSelected() {
    return this._isSelected;
  }
}
// errors after try compile
// likeComponent.ts:14:7 - error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.
// likeComponent.ts:17:7 - error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.
// If you want compile... you can use command: tsc likeComponent.ts --target ES5
