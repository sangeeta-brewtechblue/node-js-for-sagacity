export default class Car{
    constructor(id,make, color, price){    
        this.id = id;
        this.color = color;     
        this.price = price;
        this.make = make;
       
    }

    getCarInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}