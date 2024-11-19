import './App.css'

import { HelmetProvider } from 'react-helmet-async'

import { AddProductForm } from '@/components/add-product-form/AddProductForm'
import { Cart } from '@/components/cart/Cart'
import { CartProvider } from '@/components/cart/CartContext'
import { Layout } from '@/components/layout/Layout'

function App() {

  return (
    <HelmetProvider>
      <Layout>
        <CartProvider>
          <div className='flex flex-col gap-4'>
            <AddProductForm />
            <Cart />
          </div>
        </CartProvider>
      </Layout>
    </HelmetProvider>
  )
}

export default App
