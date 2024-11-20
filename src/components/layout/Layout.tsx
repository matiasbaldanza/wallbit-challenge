import React from 'react'
import { siteStrings } from '@/siteStrings'
import { Helmet } from 'react-helmet-async'
import { Footer } from '@/components/footer/Footer'
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

        <Footer />
      </div>
    </div>
  )
}
