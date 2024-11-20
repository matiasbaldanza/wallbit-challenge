import { siteStrings } from '@/siteStrings'
import { ArrowUpRightIcon } from 'lucide-react'

function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center gap-1 my-4 text-center text-balance'>
      <p className='text-sm text-gray-500'>
        {siteStrings.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
      </p>
      <p
        className='text-xs text-gray-500'
      >
        Hecho por{" "}
        <a
          href="https://twitter.com/matiasbaldanza"
          target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
          MatíasBaldanza
          <ArrowUpRightIcon className='inline mb-0.5 w-3 h-3' />
        </a>{" "}
        para el challenge de Frontend de Wallbit - {" "}
        <a
          href="https://github.com/matiasbaldanza/wallbit-challenge/tree/cart-matias"
          target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
          REPO
          <ArrowUpRightIcon className='inline mb-0.5 w-3 h-3' />
        </a>
      </p>
    </footer>
  )
}

export { Footer }