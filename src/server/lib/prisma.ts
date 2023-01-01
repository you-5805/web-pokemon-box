import { DATABASE_URL } from '../config/env';
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL,
    },
  },
  log: ['error', 'warn', 'info', 'query'],
});
