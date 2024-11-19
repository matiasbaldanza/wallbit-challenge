import { CartItem } from './Cart'

export type CartState = {
  items: CartItem[]
  createdAt: Date
}

export type CartAction =
  | { type: 'LOAD_CART', payload: CartState }
  | { type: 'CLEAR_CART' }
  | { type: 'ADD_ITEM', payload: CartItem }
  | { type: 'REMOVE_ITEM', payload: string }
  | { type: 'INCREASE_ITEM_QUANTITY', payload: { id: string, quantity: number } }
  | { type: 'DECREASE_ITEM_QUANTITY', payload: string }

export const initialState: CartState = {
  items: [],
  createdAt: new Date()
}

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'LOAD_CART':
      return {
        ...state,
        items: action.payload.items,
        createdAt: action.payload.createdAt || state.createdAt
      }

    case 'CLEAR_CART':
      return { ...initialState, createdAt: new Date() }

    case 'ADD_ITEM': {
      // If the product already exists in the cart, update the quantity
      const itemExists = state.items.some(item => item.id === action.payload.id)
      if (itemExists) {
        return cartReducer(
          state,
          { type: 'INCREASE_ITEM_QUANTITY', payload: { id: action.payload.id.toString(), quantity: action.payload.quantity } }
        )
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: action.payload.quantity }]
      };
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== Number(action.payload))
      }

    case 'INCREASE_ITEM_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === Number(action.payload.id)
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        )
      }

    case 'DECREASE_ITEM_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === Number(action.payload)
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      }

    default:
      return state
  }
}