import { useContext } from 'react'
import { CartContext } from './CartContext'
import { Product } from '@/types/product'
import { CartItemsList } from './CartItemsList'

export interface CartItemI extends Product {
  quantity: number
}

import { cartText } from './cartStrings'
import { CartSummary } from './CartSummary'

const Cart: React.FC = () => {
  const { state } = useContext(CartContext)
  const { items } = state

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-xl font-bold'>
        {cartText.title}
      </h2>

      {items.length === 0
        ? cartText.emptyCart.map((text, index) => (
          <p
            key={index}
            className='text-sm text-gray-500 text-balance'
          >
            {text}
          </p>
        ))
        : <CartItemsList />
      }
      {items.length > 0 && (
        <CartSummary />
      )}
    </div>
  )
}

export { Cart }
