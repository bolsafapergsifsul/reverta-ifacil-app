import {z} from 'zod';

const documentRegex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;

export const signUpSchema = z.object({
  name: z.string().min(2, 'O nome é obrigatório'),
  email: z.email('E-mail inválido'),
  password: z.string().min(8, 'A senha deve ter no mínimo 6 caracteres'),
  document: z.string().regex(documentRegex, 'CPF inválido'),
  profilePic: z.string().nullable(),
  phone: z.string().min(10, 'Telefone inválido'),
  zipCode: z.string().min(8, 'CEP inválido'),
  latitude: z.string(),
  longitude: z.string(),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
