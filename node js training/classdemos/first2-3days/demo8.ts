interface Point{longi:number,lati:number};
class Coord{
    constructor(public x:number,public y:number){
        this.x =x;
        this.y=y;
    }
}

function    getDistance(p1:Point,p2:Point):void{
     let   dx = p1.longi - p2.longi;
     let   dy = p1.lati - p2.lati;
        let   distance = Math.sqrt(dx * dx + dy * dy);
        console.log(`Distance between points: ${distance}`);

}
 cv