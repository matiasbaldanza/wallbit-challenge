import { z } from 'zod'

export const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  image: z.string().url(),
})

export type Product = z.infer<typeof ProductSchema>
