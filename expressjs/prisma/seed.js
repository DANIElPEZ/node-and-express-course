import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  //return
  const users = [
    { name: 'Usuario 1', email: 'usuario1@ejemplo.com', password: 'password1', role: 'USER' },
    { name: 'Usuario 2', email: 'usuario2@ejemplo.com', password: 'password2', role: 'USER' },
  ];

  for (const user of users) {
    await prisma.user.create({
      data: user
    });
  }

}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());