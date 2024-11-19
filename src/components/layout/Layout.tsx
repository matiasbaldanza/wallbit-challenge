import React from 'react'
import { siteStrings } from '@/siteStrings'
import { Helmet } from 'react-helmet-async'
import { ArrowUpRightIcon } from 'lucide-react'

export const Layout = (
  { children }: { children: React.ReactNode }
) => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='container flex flex-col min-h-screen gap-4 p-4 mx-auto mt-4 md:max-w-2xl'>
        <Helmet>
          <title>{siteStrings.title}</title>
          <meta name='description' content={siteStrings.description} />
        </Helmet>

        <header className='flex items-center justify-between'>
          <h1 className='text-2xl font-bold'>{siteStrings.header}</h1>
        </header>

        <main className='flex flex-col flex-grow gap-4 '>
          {children}
        </main>

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
              href="https://github.com/matiasbaldanza/wallbit-challenge"
              target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
              REPO
              <ArrowUpRightIcon className='inline mb-0.5 w-3 h-3' />
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}
