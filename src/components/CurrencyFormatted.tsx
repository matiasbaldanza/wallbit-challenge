const CurrencyFormatted = (amount: number) => {
  // const formatter = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'ARS' })
  // const currencySymbol = formatter.formatToParts(0).find(part => part.type === 'currency')?.value
  const wholeNumber = Math.floor(amount)
  const formattedAmount = new Intl.NumberFormat(undefined, { style: 'decimal' }).format(wholeNumber)
  const cents = Math.round((amount - wholeNumber) * 100)
  const currencySymbol = '$'

  return (
    <span>
      {currencySymbol}{" "}
      {formattedAmount}
      {cents > 0 && <sup className='text-xs'>{cents.toString().padStart(2, '0')}</sup>}
    </span>
  )
}

export { CurrencyFormatted }