import { useContext } from 'react'
import { CartContext } from './CartContext'
import { Button } from '@/components/ui/button'
import { CurrencyFormatted } from '../CurrencyFormatted'
import { cartText } from './cartStrings'
import { Quantity } from '../quantity/Quantity'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

function CartItemsList() {
  const { state, dispatch } = useContext(CartContext)
  const { items } = state

  const handleRemoveItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    dispatch({
      type: 'UPDATE_ITEM_QUANTITY',
      payload: { id, quantity: newQuantity }
    })
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow className='[&>*]:text-center'>
            <TableHead>{cartText.id}</TableHead>
            <TableHead>{cartText.image}</TableHead>
            <TableHead className='!text-left'>{cartText.product}</TableHead>
            <TableHead>{cartText.unitPrice}</TableHead>
            <TableHead>{cartText.quantity}</TableHead>
            <TableHead>{cartText.productTotal}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={`${index}-${item.id}`} className='text-center'>
              <TableCell className='text-center'>{item.id}</TableCell>
              <TableCell>
                <img
                  src={item.image}
                  alt={item.title}
                  width={50}
                  height={50}
                  className='object-contain aspect-square max-'
                />
              </TableCell>
              <TableCell className='flex flex-col gap-1 text-xs text-left '>
                <p className='line-clamp-2 text-balance'>{item.title}</p>
                <Button
                  variant='link'
                  className='py-0 text-xs leading-snug text-destructive w-fit h-fit'
                  onClick={() => handleRemoveItem(item.id.toString())}
                >
                  {cartText.remove}
                </Button>
              </TableCell>
              <TableCell className='w-20'>
                {CurrencyFormatted(item.price)}
              </TableCell>
              <TableCell>
                <Quantity
                  quantity={item.quantity}
                  minQuantity={1}
                  maxQuantity={10}
                  className='w-20'
                  setQuantity={(newQuantity) => handleUpdateQuantity(item.id.toString(), newQuantity)}
                />
              </TableCell>
              <TableCell className='min-w-24'>
                <span className='text-base font-semibold text-right'>
                  {CurrencyFormatted(item.price * item.quantity)}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export { CartItemsList }