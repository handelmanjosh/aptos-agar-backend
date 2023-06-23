import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();



async function main() {

}

main().catch(err => {
    console.error(err);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});

export default prisma;