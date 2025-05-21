//const { PrismaClient } = require('@prisma/client');
const { PrismaClient } =require("../generated/prisma");
const prisma = new PrismaClient();
const CarDTO = require('../dtos/carDto');

const getAllCars = async () => {
    const cars = await prisma.car.findMany();
    return cars.map(car => new CarDTO(car));
};
const getCarById = async (id) => {
    const car = await prisma.car.findUnique({
        where: { id }
    });
    return car ? new CarDTO(car) : null;
};

const createCar = async (data) => {
    const newCar = await prisma.car.create({
        data: {
            
            model: data.model,           
            color: data.color,
            price: data.price
        }
    });
    return new CarDTO(newCar);
};

const updateCar = async (id, data) => {
    const updatedCar = await prisma.car.update({
        where: { id },
        data: {
           
            model: data.model,
            color: data.color,
            price: data.price
        }
    });
    return new CarDTO(updatedCar);
};

const deleteCar = async (id) => {
    await prisma.car.delete({
        where: { id }
    });
};

module.exports = {
    getAllCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar
};
