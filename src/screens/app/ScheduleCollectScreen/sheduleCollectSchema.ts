import z from 'zod';

export const sheduleCollectSchema = z.object({
  weight: z.string().min(1, 'o peso é obrigatório'),
  observations: z.string().optional(),
});

export type SheduleCollectSchema = z.infer<typeof sheduleCollectSchema>;
