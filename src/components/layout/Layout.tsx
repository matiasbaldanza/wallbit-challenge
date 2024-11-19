import React from 'react'
import { siteStrings } from '@/siteStrings'
import { Helmet } from 'react-helmet-async'
import ReactMarkdown from 'react-markdown'
import { ArrowUpRightIcon } from 'lucide-react'

export const Layout = (
  { children }: { children: React.ReactNode }
) => {
  return (
    <div className='container flex flex-col max-w-lg min-h-screen gap-4 p-4 mx-auto mt-4'>
      <Helmet>
        <title>{siteStrings.title}</title>
        <meta name='description' content={siteStrings.description} />
      </Helmet>

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
        {/* Format links from markdown and make them open in a new tab */}
        <ReactMarkdown
          className='text-xs text-gray-500'
          components={{
            a: ({ children, href }) => {
              const text = React.Children.toArray(children).join('')
              return (
                <a
                  href={href}
                  target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
                  {text}
                  <ArrowUpRightIcon className='inline mb-0.5 w-3 h-3' />
                </a>
              )
            }
          }}
        >
          {siteStrings.footer.author}
        </ReactMarkdown>
      </footer>
    </div>
  )
}
