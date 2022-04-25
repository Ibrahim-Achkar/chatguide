import { objectType, extendType } from 'nexus';
import { Message } from './Message';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id');
    t.string('username');
    t.list.field('sentMessages', {
      type: Message,
      async resolve(parent, _args, context) {
        return await context.prisma.message.findMany({
          where: {
            senderId: parent.id,
          },
        });
      },
    });
    t.list.field('receivedMessages', {
      type: Message,
      async resolve(parent, _args, context) {
        return await context.prisma.message.findMany({
          where: {
            receiverId: parent.id,
          },
        });
      },
    });
  },
});

export const UsersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('users', {
      type: 'User',
      resolve(_parent, _args, context) {
        return context.prisma.user.findMany();
      },
    });
  },
});
