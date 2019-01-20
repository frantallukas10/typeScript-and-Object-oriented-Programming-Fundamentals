"use strict";
exports.__esModule = true;
var likeComponent_1 = require("./likeComponent");
var component = new likeComponent_1.LikeComponent(10, true);
component.onClick();
console.log("likesCount: " + component.likesCount + ", isSelected: " + component.isSelected);
