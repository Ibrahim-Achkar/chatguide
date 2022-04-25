import { objectType, extendType } from 'nexus';
import { User } from './User';

export const Message = objectType({
  name: 'Message',
  definition(t) {
    t.string('id');
    t.string('content');
    t.string('senderId');
    t.field('sender', {
      type: User,
      async resolve(parent, _args, context) {
        return await context.prisma.user.findUnique({
          where: {
            id: parent.senderId,
          },
        });
      },
    });
    t.field('receiver', {
      type: User,
      async resolve(parent, _args, context) {
        return await context.prisma.user.findUnique({
          where: {
            id: parent.receiverId,
          },
        });
      },
    });
  },
});

export const MessagesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('messages', {
      type: 'Message',
      resolve(_parent, _args, context) {
        return context.prisma.message.findMany();
      },
    });
  },
});
