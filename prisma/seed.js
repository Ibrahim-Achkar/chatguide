import { prisma } from './client.js';

const userData = [
  {
    username: 'ibrahim',
    email: 'ibrahim@gmail.com',
    role: 'ADMIN',
  },
  {
    username: 'jenny',
    email: 'jenny@gmail.com',
    role: 'USER',
  },
  {
    username: 'kat',
    email: 'kat@gmail.com',
    role: 'USER',
  },
  {
    username: 'gaby',
    email: 'gaby@gmail.com',
    role: 'USER',
  },
];

const messageData = [
  {
    sender: 'kat',
    receiver: 'jenny',
    content: 'can you walk my dog',
  },
  {
    sender: 'jenny',
    receiver: 'ibrahim',
    content: 'stop eating all the food',
  },
  {
    sender: 'gaby',
    receiver: 'ibrahim',
    content: 'i spent five hours on the phone with them and got my $2.50 back',
  },
  {
    sender: 'ibrahim',
    receiver: 'jenny',
    content: 'what was there name again?',
  },
];

async function seedUsers() {
  await prisma.user.deleteMany();

  await prisma.user.createMany({
    data: userData,
  });
}

async function seedMessage(message) {
  await prisma.message.deleteMany();

  const sender = await prisma.user.findUnique({
    where: {
      username: message.sender,
    },
  });

  const receiver = await prisma.user.findUnique({
    where: {
      username: message.receiver,
    },
  });

  await prisma.message.create({
    data: {
      senderId: sender.id,
      receiverId: receiver.id,
      content: message.content,
    },
  });
}

seedUsers()
  .then(async () => {
    messageData.forEach((message) => {
      seedMessage(message);
    });
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
