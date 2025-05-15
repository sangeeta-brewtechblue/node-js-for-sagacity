var Coord1 = /** @class */ (function () {
    function Coord1(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
        //  this.latitude = latitude;
        //  this.longitude = longitude;
    }
    Coord1.prototype.distance = function (p1, p2) {
        var dx = p1.latitude - p2.latitude;
        var dy = p1.longitude - p2.longitude;
        var dist = Math.sqrt(dx * dx + dy * dy);
        console.log("Distance between points is: " + dist);
    };
    return Coord1;
}());
var p1 = new Coord1(10, 20);
var p2 = new Coord1(30, 40);
p1.distance(p1, p2);
