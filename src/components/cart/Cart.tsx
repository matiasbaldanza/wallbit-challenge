import { useContext } from 'react'
import { CartContext } from './CartContext'
import { Product } from '@/types/product'

export interface CartItemI extends Product {
  quantity: number
}

import { cartText } from './cartStrings'
import { CartSummary } from './CartSummary'

const Cart: React.FC = () => {
  const { state, dispatch } = useContext(CartContext)
  const { items } = state

  const handleRemoveItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

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
        : (
          <ul className='flex flex-col gap-4'>
            {items.map((item, index) => (
              <li key={`${index}-${item.id}`}>
                <p>ID: {item.id}</p>
                <p>Product: {item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => handleRemoveItem(item.id.toString())}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      {items.length > 0 && (
        <CartSummary />
      )}
    </div>
  )
}

export { Cart }
