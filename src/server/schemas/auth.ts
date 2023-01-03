import { z } from 'zod';

export const authCookieSchema = z.object({
  anon_user_id: z.string().uuid(),
});
