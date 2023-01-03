import { setCookie } from '@/server/lib/setCookie';
import { prisma } from '@/server/lib/prisma';
import { authCookieSchema } from '@/server/schemas/auth';
import { CookieSerializeOptions } from 'cookie';
import type { NextApiHandler } from 'next';

const cookieOptions = {
  httpOnly: true,
  secure: true,
  maxAge: 60 * 60 * 24 * 365,
} satisfies CookieSerializeOptions;

const handler: NextApiHandler = async (req, res) => {
  const parsed = authCookieSchema.safeParse(req.cookies);
  if (parsed.success) {
    const id = parsed.data.anon_user_id;
    setCookie(res, 'anon_user', id, cookieOptions);
    res.json({ code: 'postponed' });
    return;
  }

  const { id } = await prisma.anonymousUser.create({ data: {} });
  setCookie(res, 'anon_user', id, cookieOptions);
  res.status(201).json({ code: 'created' });
};

export default handler;
