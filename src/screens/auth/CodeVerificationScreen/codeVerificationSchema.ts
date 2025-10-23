import z from 'zod';

export const codeVerificationSchema = z.object({
  code: z.string().length(4, 'O código deve ter 4 dígitos'),
});

export type CodeVerificationSchema = z.infer<typeof codeVerificationSchema>;
