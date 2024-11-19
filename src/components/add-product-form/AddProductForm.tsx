import { useState, useContext } from 'react'

import { CartContext } from '@/components/cart/CartContext'
import { productApi } from '@/data/productApi'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Quantity } from '@/components/quantity/Quantity'

import { cartText } from '@/components/cart/cartStrings'


const AddProductForm: React.FC = () => {
  const [productId, setProductId] = useState<string>("")
  const [quantity, setQuantity] = useState<number>(1)
  const [error, setError] = useState<string | null>(null)

  const { dispatch } = useContext(CartContext)

  const handleAddProduct = async () => {
    try {
      const product = await productApi.getProductById(Number(productId))

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleAddProduct()
  }

  return (
    <>
      <div>
        <h2 className='text-xl font-bold'>
          Agregar productos
        </h2>
        <p className='text-sm italic text-gray-500 text-balance'>
          Agrega productos al carrito de compras utilizando el ID de producto y la cantidad que deseas agregar.
        </p>
      </div>
      <form className='flex w-full gap-2' onSubmit={handleSubmit}>
        <Input
          type="number"
          placeholder="Product ID"
          value={productId}
          onChange={(e) => setProductId(
            Number(e.target.value) >= 1
              ? e.target.value
              : "")}
          className='grow'
        />
        <Quantity
          quantity={quantity}
          minQuantity={1}
          setQuantity={setQuantity}
        />

        <Button
          type="submit"
          disabled={!productId || Number(productId) < 1}
        >
          {cartText.addItem}
        </Button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </>
  )
}

export { AddProductForm }
