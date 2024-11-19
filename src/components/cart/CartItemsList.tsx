import { useContext } from 'react'
import { CartContext } from './CartContext'
import { Button } from '@/components/ui/button'
import { TrashIcon } from 'lucide-react'
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

  console.log('Items', items)

  const handleRemoveItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    dispatch({
      type: 'UPDATE_ITEM_QUANTITY',
      payload: { id: id.toString(), quantity: newQuantity }
    })
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{cartText.id}</TableHead>
            <TableHead>{cartText.image}</TableHead>
            <TableHead>{cartText.product}</TableHead>
            <TableHead>{cartText.unitPrice}</TableHead>
            <TableHead>{cartText.quantity}</TableHead>
            <TableHead>{cartText.actions}</TableHead>
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
              <TableCell className='text-xs text-left line-clamp-2 text-balance'>
                {item.title}
              </TableCell>
              <TableCell className='w-20'>
                {CurrencyFormatted(item.price)}
              </TableCell>
              <TableCell>
                <Quantity
                  quantity={item.quantity}
                  className='w-20'
                  setQuantity={(newQuantity) => handleUpdateQuantity(item.id.toString(), newQuantity)}
                />
              </TableCell>
              <TableCell>
                <Button
                  variant='destructive'
                  onClick={() => handleRemoveItem(item.id.toString())}
                >
                  <TrashIcon className='w-2 h-4' />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export { CartItemsList }