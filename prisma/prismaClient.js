const pkg = require('@prisma/client');
const { PrismaClient } = pkg;

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// Learn more: https://pris.ly/d/help/next-js-best-practices

let prismaClient;

if (process.env.NODE_ENV === 'production') {
  prismaClient = new PrismaClient();
} else {
  if (!global.prismaClient) {
    global.prismaClient = new PrismaClient();
  }

  prismaClient = global.prismaClient;
}
export default prismaClient;
