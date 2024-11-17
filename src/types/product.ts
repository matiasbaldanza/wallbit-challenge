import { z } from 'zod'

export const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.number(),
  image: z.string().url(),
  rating: z.object({
    rate: z.number(),
    count: z.number()
  })
})

export type Product = z.infer<typeof ProductSchema>
