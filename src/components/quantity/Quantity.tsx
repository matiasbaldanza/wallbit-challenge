import { Input } from "../ui/input"
import { QuantityAdjustButton } from "./QuantityAdjustButton"
import { PlusIcon, MinusIcon } from "lucide-react"

interface QuantityProps {
  quantity: number
  minQuantity?: number
  maxQuantity?: number
  setQuantity: (quantity: number) => void
}

const handleDecrement = (e: React.MouseEvent<HTMLButtonElement>, quantity: number, minQuantity: number) => {
  e.preventDefault()
  return quantity > minQuantity ? quantity - 1 : minQuantity
}

const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>, quantity: number, maxQuantity?: number) => {
  e.preventDefault()
  return maxQuantity
    ? (quantity < maxQuantity ? quantity + 1 : maxQuantity)
    : quantity + 1
}

const DecrementButton = ({ onClick }: { onClick: (e: React.MouseEvent<HTMLButtonElement>) => void }) => (
  <QuantityAdjustButton
    onClick={onClick}
    ariaLabel='Decrement quantity'
    className='left-1'
  >
    <MinusIcon className='w-2 h-2 text-blue-500' />
  </QuantityAdjustButton>
)

const IncrementButton = ({ onClick }: { onClick: (e: React.MouseEvent<HTMLButtonElement>) => void }) => (
  <QuantityAdjustButton
    onClick={onClick}
    ariaLabel='Increment quantity'
    className='right-1'
  >
    <PlusIcon className='w-2 h-2 text-blue-500' />
  </QuantityAdjustButton>
)

function Quantity({
  quantity,
  minQuantity = 1,
  maxQuantity,
  setQuantity,
}: QuantityProps) {
  return (
    <div className='relative flex items-center w-full gap-2'>
      <DecrementButton
        onClick={(e) => setQuantity(
          handleDecrement(e, quantity, minQuantity)
        )}
      />

      <Input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className='w-full px-2 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
        aria-label='Quantity'
      />

      <IncrementButton
        onClick={(e) => setQuantity(
          handleIncrement(e, quantity, maxQuantity)
        )}
      />
    </div>
  )
}

export { Quantity }