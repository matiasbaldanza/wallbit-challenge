import { useContext, useState } from 'react'
import { cartText } from './cartStrings'
import { CartContext } from './CartContext'
import { Button, buttonVariants } from '../ui/button'
import { CurrencyFormatted } from '../CurrencyFormatted'
import { cn } from '@/lib/utils'

interface CartSummaryProps {
  className?: string
}

function CartSummary({
  className
}: CartSummaryProps) {
  const { state, dispatch } = useContext(CartContext)
  const { items } = state
  const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const baseClassName = 'flex flex-col gap-4 p-4 bg-white rounded-lg shadow'


  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const [isCheckoutDialogOpen, setIsCheckoutDialogOpen] = useState(false)

  const handleCheckout = () => {
    setIsCheckoutDialogOpen(true)
  }

  return (
    <div className={cn(baseClassName, className)}>
      <h3
        className='text-lg font-bold'
      >
        {cartText.summary.title}
      </h3>
      <hr />
      <section className='flex flex-col gap-2 [&>*]:w-full [&>*]:grid [&>*]:grid-cols-2 [&>*]:gap-2'>
        <div>
          <p>
            {cartText.summary.products} ({items.length}){" "}
            <span className='text-xs italic text-muted-foreground'>({items.reduce((acc, item) => acc + item.quantity, 0)} Artículos)</span>
          </p>
        </div>

        <p className='font-normal'>{cartText.summary.total}:
          <span className='text-xl font-semibold text-right'>{CurrencyFormatted(totalAmount)}</span>
        </p>
      </section>

      {/* Action buttons */}
      <section className='flex flex-row gap-2'>

        <Button
          onClick={handleClearCart}
          className={buttonVariants({ variant: 'destructive' })}
        >
          {cartText.clearCart}
        </Button>
        <Button
          className={`${buttonVariants({ variant: 'default' })} w-full`}
          onClick={handleCheckout}
        >
          {cartText.checkout}
        </Button>
        {isCheckoutDialogOpen && ( // Conditionally render the dialog
          <dialog open
            className='flex flex-col w-full gap-2 p-8 mx-2 text-center bg-white border-2 border-black rounded-lg shadow-lg text-balance md:max-w-md backdrop-brightness-50'
          >
            <div>
              <p className='text-lg'>
                El checkout no está implementado 😁
              </p>
              <p className='text-sm italic text-muted-foreground'>
                Quedaba feo el summary sin un botón de checkout, ¿no?
              </p>
            </div>
            <Button onClick={() => setIsCheckoutDialogOpen(false)}>Volver al carrito</Button>
          </dialog>
        )}

      </section >
    </div>
  )
}

export { CartSummary }
