import './App.css'
import { AddProductForm } from './components/add-product-form/AddProductForm'
import { Cart } from './components/cart/Cart'
import { CartProvider } from './components/cart/CartContext'
import { Layout } from './components/layout/Layout'

function App() {

  return (
    <>
      <Layout>
        <CartProvider>
          <AddProductForm />
          <Cart />
        </CartProvider>
      </Layout>
    </>
  )
}

export default App
