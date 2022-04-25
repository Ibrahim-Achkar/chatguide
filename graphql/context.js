import { prismaClient } from '../prisma/prismaClient.js';

/*TODO: pretty sure I should not be using global here, but trying to use prismaClient
 from import was returning undefined. Try to fix this later. */

export async function createContext({ req, res }) {
  return {
    prisma: global.prismaClient,
  };
}
