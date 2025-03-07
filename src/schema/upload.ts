import { z } from "zod";

export const artSchema = z.object({
  title: z.string().min(3, "Name must br at least 2 characters"),
  email: z.string().email().optional(),
  name: z.string().optional(),
  content: z.string().optional(),
});

export type ArtFormT = z.infer<typeof artSchema>;
