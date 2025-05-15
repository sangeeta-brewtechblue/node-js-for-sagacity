var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(color, make, digitalKey) {
        this.color = color;
        this.color = color;
        this._make = make;
        this._digitalKey = digitalKey;
        Car.counter++;
    }
    Object.defineProperty(Car.prototype, "make", {
        get: function () {
            return this._make;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.drive = function () {
        console.log("driving" + this._make + " in " +
            this.color + "with key" + this._digitalKey);
    };
    Car.showCounter = function () {
        console.log("Total number of cars created: " + Car.counter);
    };
    Car.counter = 0;
    return Car;
}());
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar(color, make, digitalKey, charger) {
        var _this = _super.call(this, color, make, digitalKey) || this;
        _this.charger = charger;
        return _this;
    }
    ElectricCar.prototype.drive = function () {
        _super.prototype.drive.call(this);
        console.log("with charger" + this.charger);
    };
    return ElectricCar;
}(Car));
Car.showCounter();
var ecar = new ElectricCar("red", "Tesla", "1234", "portable");
Car.showCounter();
