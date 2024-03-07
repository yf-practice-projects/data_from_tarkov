import { z } from 'zod';
import { SupportFormSchema } from "./schemas"
export type Support = z.infer<typeof SupportFormSchema>;