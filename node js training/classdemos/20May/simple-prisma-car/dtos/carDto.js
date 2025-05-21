class CarDTO {
    constructor(car) {
        this.id = car.id;     
        this.model = car.model;      
        this.color = car.color;
        this.price = car.price;       
    }
}

module.exports = CarDTO;
