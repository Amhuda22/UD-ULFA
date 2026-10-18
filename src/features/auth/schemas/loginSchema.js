import { z } from 'zod'

export const loginSchema = z.object({
  username: z.string().trim().min(1, 'Username tidak boleh kosong.'),
  password: z.string().trim().min(1, 'Pasword tidak boleh kosong.'),
})
