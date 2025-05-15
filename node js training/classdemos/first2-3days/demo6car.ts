class Car{
    private _make:string;
    protected _digitalKey:string;
    static counter:number=0

    constructor(public color:string, make:string, digitalKey:string){
        this.color = color;
        this._make = make;
        this._digitalKey = digitalKey;
       Car.counter++;
    }
    get make():string{
        return this._make;
    }
    drive(){
        console.log("driving"+ this._make+" in " + 
            this.color+"with key"+ this._digitalKey);
    }
     static showCounter(){
        console.log("Total number of cars created: " + Car.counter);
     }
}
class ElectricCar extends Car{
    private charger:string
    constructor(color:string, make:string, digitalKey:string, charger:string){
        super(color, make, digitalKey);
        this.charger=charger;
    }
    drive(){
        super.drive();
        console.log("with charger"+ this.charger);
    }
}

Car.showCounter()
let ecar = new ElectricCar("red", "Tesla", "1234", "portable");
Car.showCounter();