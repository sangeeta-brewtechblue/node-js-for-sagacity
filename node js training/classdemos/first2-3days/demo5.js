var RectangleType = /** @class */ (function () {
    function RectangleType(height, width) {
        this._height = height;
        this._width = width;
    }
    Object.defineProperty(RectangleType.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (height) {
            this._height = height;
        },
        enumerable: false,
        configurable: true
    });
    RectangleType.prototype.getArea = function () {
        return (this._height * this._width);
    };
    return RectangleType;
}());
var rect1 = new RectangleType(10, 3);
rect1.height = 20;
console.log(rect1.height);
console.log(rect1.getArea());
function showDetails() {
    console.log(rect1._height);
}
showDetails();
