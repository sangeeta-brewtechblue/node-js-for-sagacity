import { PrismaClient } from "./generated/prisma";
const prisma =new PrismaClient();
async function main() {     //
    const cars=   await prisma.car.findMany();
    console.log(cars);  
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })