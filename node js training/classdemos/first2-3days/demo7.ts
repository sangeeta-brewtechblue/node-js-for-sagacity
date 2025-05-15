interface Point1 {latitude: number; longitude: number;}
class Coord1 implements Point1{
    
    constructor(public latitude:number,public longitude:number){
      //  this.latitude = latitude;
      //  this.longitude = longitude;
    }
    distance(p1:Coord1,p2:Coord1):void{
        let dx = p1.latitude - p2.latitude;
        let dy= p1.longitude - p2.longitude;
        let dist = Math.sqrt(dx*dx + dy*dy);
        console.log("Distance between points is: " + dist);

    }
}

let p1 = new Coord1(10,20);
let p2 = new Coord1(30,40);
p1.distance(p1,p2);


