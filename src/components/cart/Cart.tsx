import { useContext } from 'react'
import { CartContext } from './CartContext'
import { Product } from '../../types/product'

export interface CartItem extends Product {
  quantity: number
}

const Cart: React.FC = () => {
  const { state, dispatch } = useContext(CartContext)
  const { items } = state

  const handleRemoveItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  return (
    <div>
      <h2 className='text-xl font-bold'>Your Cart</h2>
      <button onClick={handleClearCart}>Clear Cart</button>
      {items.length === 0
        ? (<p>Your cart is empty</p>)
        : (
          <ul>
            {items.map((item, index) => (
              <li key={`${index}-${item.id}`}>
                <p>Product: {item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => handleRemoveItem(item.id.toString())}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
    </div>
  )
}

export { Cart }
