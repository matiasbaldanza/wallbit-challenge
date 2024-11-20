import { describe, it, expect, vi, beforeEach } from 'vitest'
import axios from 'axios'

import { productApi } from './productApi'
import { Product, ProductSchema } from '@/types/product'

// Mock axios
vi.mock('axios')
const mockedAxios = vi.mocked(axios)

// Sample valid product for testing
const mockProduct: Product = {
  id: 1,
  title: 'Test Product',
  price: 99.99,
  description: 'A test product',
  category: 'electronics',
  image: 'https://via.placeholder.com/150',
  rating: { rate: 4.5, count: 100 }
}

describe('productApi', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  describe('getProductById', () => {
    it('should fetch and validate product data successfully', async () => {
      // Arrange
      vi.mocked(mockedAxios.get).mockResolvedValueOnce({ data: mockProduct })

      // Act
      const product = await productApi.getProductById(1)

      // Assert
      expect(mockedAxios.get).toHaveBeenCalledWith('https://fakestoreapi.com/products/1')
      expect(product).toEqual(mockProduct)
      expect(ProductSchema.safeParse(product).success).toBe(true)
    })

    it('should throw an error if the API returns empty string as data', async () => {
      // Arrange
      vi.mocked(mockedAxios.get).mockResolvedValueOnce({ data: '' })

      // Act & Assert
      await expect(productApi.getProductById(1)).rejects.toThrow('Product not found.')
      expect(mockedAxios.get).toHaveBeenCalledWith('https://fakestoreapi.com/products/1')
    })
    /* 
        it('should throw an error if the API returns undefined data', async () => {
          // Arrange
          vi.mocked(mockedAxios.get).mockResolvedValueOnce({ data: undefined })
    
          // Act & Assert
          await expect(productApi.getProductById(1)).rejects.toThrow('Product not found.')
          expect(mockedAxios.get).toHaveBeenCalledWith('https://fakestoreapi.com/products/1')
        })
    
        it('should throw an error if the API returns invalid data', async () => {
          // Arrange
          const invalidData = { ...mockProduct, price: 'invalid-price' } // Break schema
          vi.mocked(mockedAxios.get).mockResolvedValueOnce({ data: invalidData })
    
          // Act & Assert
          await expect(productApi.getProductById(1)).rejects.toThrow('Failed to fetch product data')
          expect(mockedAxios.get).toHaveBeenCalledWith('https://fakestoreapi.com/products/1')
        })
    */
    it('should throw an error if the API call fails', async () => {
      // Arrange
      vi.mocked(mockedAxios.get).mockRejectedValueOnce(new Error('Network Error'))

      // Act & Assert
      await expect(productApi.getProductById(1)).rejects.toThrow('Failed to fetch product data')
      expect(mockedAxios.get).toHaveBeenCalledWith('https://fakestoreapi.com/products/1')
    })
  })
})
