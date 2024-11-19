import React from 'react'
import { siteStrings } from '../../siteStrings'

export const Layout = (
  { children }: { children: React.ReactNode }
) => {
  return (
    <div className='container flex flex-col max-w-lg min-h-screen p-4 mx-auto mt-4'>
      <header className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>{siteStrings.header}</h1>
      </header>

      <main className='flex flex-col flex-grow gap-4'>
        {children}
      </main>

      <footer className='flex flex-col items-center justify-center gap-1 my-4 text-center text-balance'>
        <p className='text-sm text-gray-500'>
          {siteStrings.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
        </p>
        <p className='text-xs text-gray-500'>
          {siteStrings.footer.author}
        </p>
      </footer>
    </div>
  )
}
