import { CartItemI } from './Cart'

export type CartState = {
  items: CartItemI[]
  createdAt: Date
}

export type CartAction =
  | { type: 'LOAD_CART', payload: CartState }
  | { type: 'CLEAR_CART' }
  | { type: 'ADD_ITEM', payload: CartItemI }
  | { type: 'REMOVE_ITEM', payload: string }
  | { type: 'INCREASE_ITEM_QUANTITY', payload: { id: string, quantity: number } }
  | { type: 'DECREASE_ITEM_QUANTITY', payload: string }
  | { type: 'UPDATE_ITEM_QUANTITY', payload: { id: string, quantity: number } }

export const initialState: CartState = {
  items: [],
  createdAt: new Date()
}

// Items with zero quantity are not added to the cart
const filterZeroQuantityItems = (items: CartItemI[]) => {
  return items.filter(item => item.quantity > 0)
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
      // Only add item if quantity is greater than zero
      if (action.payload.quantity > 0) {
        return {
          ...state,
          items: filterZeroQuantityItems([...state.items, { ...action.payload, quantity: action.payload.quantity }])
        }
      }
      return state // Do not add item if quantity is zero
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

    case 'DECREASE_ITEM_QUANTITY': {
      const updatedItems = filterZeroQuantityItems(state.items.map(item =>
        item.id === Number(action.payload)
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ))

      return {
        ...state,
        items: updatedItems
      }
    }

    case 'UPDATE_ITEM_QUANTITY': {
      return {
        ...state,
        items: state.items.map(item =>
          item.id === Number(action.payload.id) ? { ...item, quantity: action.payload.quantity } : item
        )
      }
    }

    default:
      return state
  }
}