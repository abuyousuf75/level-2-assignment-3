import { z } from 'zod';

const createUserValidationSchema = z.object({
  body: z.object({
    user: z.object({
      name: z
        .string({
          invalid_type_error: 'Name must be a string',
        })
        .min(1, {
          message: 'Name is required',
        }),
      email: z
        .string({
          invalid_type_error: 'Email must be a string',
        })
        .email({
          message: 'Please provide a valid email address',
        }),
      password: z
        .string({
          invalid_type_error: 'Password must be a string',
        })
        .min(2, {
          message: 'Password must be at least 6 characters long',
        })
        .max(20, {
          message: 'Password cannot exceed 20 characters',
        }),
      role: z.enum(['admin', 'user'], {
        invalid_type_error: 'Role must be either "admin" or "user"',
      }),
      isBlocked: z
        .boolean({
          invalid_type_error: 'isBlocked must be a boolean',
        })
        .default(false),
      needPasswordChange: z
        .boolean({
          invalid_type_error: 'needPasswordChange must be a boolean',
        })
        .default(true)
        .optional(),
    }),
  }),
});

export const UserValidation = {
  createUserValidationSchema,
};
