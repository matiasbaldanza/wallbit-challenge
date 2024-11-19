import { useState, useContext } from 'react'

import { CartContext } from '../cart/CartContext'
import { productApi } from '../../data/productApi'
import { z } from 'zod'

const AddProductForm: React.FC = () => {
  const [productId, setProductId] = useState<string>("")
  const [quantity, setQuantity] = useState<number>(1)
  const [error, setError] = useState<string | null>(null)

  const { dispatch } = useContext(CartContext)

  const handleAddProduct = async () => {
    try {
      const product = await productApi.getProductById(Number(productId))
      console.log(product)

      dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity } })
      setError(null)
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError("Invalid product ID")
      } else {
        setError('Product not found or API error')
      }
    }
  }

  return (
    <div>
      <input
        type="number"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button onClick={handleAddProduct}>Add to Cart</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  )
}

export { AddProductForm }
