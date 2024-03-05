import { z } from 'zod';


export const SupportFormSchema = z.object({
	name: z.string().min(1, "no name"),
  type: z.number().min(1, "no type"),
  content: z.string().min(1, "no content")
});