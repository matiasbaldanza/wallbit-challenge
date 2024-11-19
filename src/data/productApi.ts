import axios from 'axios'
import { Product, ProductSchema } from '@/types/product'
import { z } from 'zod'

const BASE_URL = 'https://fakestoreapi.com/products'

const fetchAndValidateProduct = async <T>(
  url: string,
  schema: z.ZodType<T>
): Promise<T> => {
  try {
    const response = await axios.get(url)

    // FakeStoreAPI returns status code 200 with an empty
    // string for response.data for non-existent products 
    if (!response.data || response.data === '') {
      throw new Error('Product not found.')
    }

    // Validate the response data with Zod schema
    return schema.parse(response.data)
  } catch (error) {
    console.error('API error:', error)
    throw new Error('Failed to fetch product data')
  }
}

const productApi = {
  getProductById: async (id: number): Promise<Product> => {
    return fetchAndValidateProduct(`${BASE_URL}/${id}`, ProductSchema)
  },

}

export { productApi }
