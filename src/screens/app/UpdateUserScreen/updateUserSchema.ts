import z from 'zod';

const documentRegex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;

export const updateUserSchema = z.object({
  name: z.string().min(2, 'O nome é obrigatório'),
  document: z.string().regex(documentRegex, 'CPF inválido'),
  phoneNumber: z.string().min(10, 'Telefone inválido'),
  zipCode: z.string().min(8, 'CEP inválido'),
  numberAddress: z.string().min(1, 'Número do endereço é obrigatório'),
});

export type UpdateUserSchema = z.infer<typeof updateUserSchema>;
