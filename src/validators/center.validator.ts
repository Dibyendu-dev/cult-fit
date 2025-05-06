import { z } from "zod";

export const centerSchema = z.object({
    name: z.string().min(1),
    location: z.string()
})