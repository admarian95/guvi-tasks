"use strict";
exports.__esModule = true;
exports.ADircle = void 0;
var ADircle = /** @class */ (function () {
    function ADircle(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    ADircle.prototype.getRadius = function () {
        return this.radius;
    };
    ADircle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    ADircle.prototype.getColor = function () {
        return this.color;
    };
    ADircle.prototype.setColor = function (color) {
        this.color = color;
    };
    ADircle.prototype.toString = function () {
        return this.color;
    };
    ADircle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    ADircle.prototype.getCircumference = function () {
        return 2 * Math.PI * this.radius;
    };
    return ADircle;
}());
exports.ADircle = ADircle;
