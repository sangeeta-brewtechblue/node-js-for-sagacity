import carDb from "./db.js";
import Car from "./model.js";

export function getAllCars ()  {
    return carDb;
}














export function getCarById  (id) {    
    return carDb.find(car => car.id === id);
}
export function addCar (car) {
    const newCar = new Car(car.id, car.make, car.color, car.price);
    carDb.push(newCar);
    return newCar;
}
export function updateCar (id, updatedCar) {
    const carIndex = carDb.findIndex(car => car.id === id);
    if (carIndex !== -1) {
        const updatedCarInstance = new Car(id, updatedCar.make, updatedCar.color, updatedCar.price);
        carDb[carIndex] = updatedCarInstance;
        return updatedCarInstance;
    }
    return null;
}
export function deleteCar (id) {
    const carIndex = carDb.findIndex(car => car.id === id);
    if (carIndex !== -1) {
        const deletedCar = carDb.splice(carIndex, 1);        
    }
   return getAllCars();
}       
