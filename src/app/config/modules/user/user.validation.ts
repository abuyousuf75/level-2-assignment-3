import {z} from 'zod'

const createUserValidationSchema = z.object({
    name: z.string({
        invalid_type_error: 'Please give name as string'
    }),
    email: z.string({
        invalid_type_error: 'Please give your email'
    }),
  password: z
    .string({
      invalid_type_error: 'Password must be a string',
    })
    .max(20, {
      message: 'Password can not be more then 20 charachter',
    })
    .optional(),
});