import z from 'zod';

export const newPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, 'A nova senha deve ter no mínimo 8 caracteres'),
    confirmPassword: z
      .string()
      .min(8, 'A confirmação de senha deve ter no mínimo 8 caracteres'),
  })
  .refine(data => data.newPassword === data.confirmPassword, {
    message: 'As senhas não coincidem',
  });

export type NewPasswordSchema = z.infer<typeof newPasswordSchema>;
