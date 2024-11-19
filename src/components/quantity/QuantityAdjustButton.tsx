import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

interface QuantityAdjustButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  ariaLabel: string
  className?: string
  children: React.ReactNode
}

const QuantityAdjustButton = ({
  onClick,
  ariaLabel,
  className,
  children
}: QuantityAdjustButtonProps) => {
  const defaultClassName = 'absolute h-[80%] w-[10%]'

  return (
    <Button
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(defaultClassName, className)}
      variant='ghost'
    >
      {children}
    </Button>
  )
}

export { QuantityAdjustButton }