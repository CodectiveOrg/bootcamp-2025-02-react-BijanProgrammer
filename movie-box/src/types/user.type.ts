import { z } from "zod";

export const userSchema = z.object({
  id: z.string().nullable(),
  username: z.string().nullable(),
  email: z.string().nullable(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
});

export type UserType = z.infer<typeof userSchema>;
