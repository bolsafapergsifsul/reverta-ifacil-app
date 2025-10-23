import {z} from 'zod';

export const loginSchema = z.object({
  email: z.string().email('email inválido'),
  password: z.string().min(8, 'a senha deve ter no mínimo 8 caracteres'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
