import axios from 'axios'
import { Product, ProductSchema } from '../types/product'
import { z } from 'zod'

const BASE_URL = 'https://fakestoreapi.com/products'

const fetchAndValidateProduct = async <T>(
  url: string,
  schema: z.ZodType<T>
): Promise<T> => {
  try {
    const response = await axios.get(url)
    return schema.parse(response.data)
  } catch (error) {
    console.error('API error:', error)
    throw new Error('Failed to fetch data')
  }
}

const productApi = {
  getProductById: async (id: number): Promise<Product> => {
    return fetchAndValidateProduct(`${BASE_URL}/${id}`, ProductSchema)
  },

}

export { productApi }
