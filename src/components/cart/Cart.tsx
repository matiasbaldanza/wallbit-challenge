import { useContext } from 'react'
import { CartContext } from './CartContext'
import { Product } from '@/types/product'
import { CartItemsList } from './CartItemsList'
import { cn } from '@/lib/utils'

export interface CartItemI extends Product {
  quantity: number
}

import { cartText } from './cartStrings'
import { CartSummary } from './CartSummary'

interface CartProps {
  className?: string
}

const Cart: React.FC<CartProps> = ({
  className
}) => {
  const { state } = useContext(CartContext)
  const { items } = state
  const baseClassName = 'flex flex-col gap-4 p-4 bg-white rounded-lg shadow'

  return (
    <>
      <div className={cn(baseClassName, className)}>
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
            <>
              <CartItemsList />
              <p className='text-xs text-gray-500 text-balance'>
                <span className='block sm:inline'>{cartText.cartCreatedAt}</span>
                <span className='block font-bold sm:inline'>
                  {" "}
                  {new Date(state.createdAt)
                    .toLocaleString("es-AR", {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })
                  }
                </span>
              </p>
            </>
          )}
      </div>
      {items.length > 0 && (
        <CartSummary />
      )}
    </>
  )
}

export { Cart }
