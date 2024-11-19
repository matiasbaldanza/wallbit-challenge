import { createContext, useReducer, useEffect } from 'react'
import { CartAction, cartReducer, initialState } from './cartReducer'
import { CartItemI } from './Cart'

type CartState = {
  items: CartItemI[]
  createdAt: Date
}

interface CartContentProps {
  state: CartState
  dispatch: React.Dispatch<CartAction>
}

const CartContext = createContext<CartContentProps>({
  state: initialState,
  dispatch: () => { }
})

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Load cart from localstorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (!savedCart) return

    const parsedCart = JSON.parse(savedCart)
    // Ensure the parsed cart is valid before dispatching
    if (!Array.isArray(parsedCart.items) || parsedCart.items.length === 0) return // Guard clause for invalid cart

    dispatch({ type: 'LOAD_CART', payload: parsedCart })
  }, [])

  // Save cart to localstorage on state change
  useEffect(() => {
    const currentCart = JSON.stringify(state)
    const savedCart = localStorage.getItem('cart')

    // Only save if the current cart is different from the saved cart
    if (currentCart !== savedCart) {
      localStorage.setItem('cart', currentCart)
    }
  }, [state])

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
