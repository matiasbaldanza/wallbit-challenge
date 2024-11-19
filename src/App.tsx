import './App.css'
import { AddProductForm } from './components/add-product-form/AddProductForm'
import { Cart } from './components/cart/Cart'
import { CartProvider } from './components/cart/CartContext'

function App() {

  return (
    <>
      <CartProvider>
        <AddProductForm />
        <Cart />
      </CartProvider>
    </>
  )
}

export default App
