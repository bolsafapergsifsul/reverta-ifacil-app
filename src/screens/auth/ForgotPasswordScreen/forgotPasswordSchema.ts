import z from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.email('Digite um e-mail válido'),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
