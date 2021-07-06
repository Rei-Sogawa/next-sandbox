import Head from 'next/head'
import React, { ReactNode, VFC } from 'react'

type Props = {
  children?: ReactNode
  title?: string
}

export const Layout: VFC<Props> = ({ children, title = 'This is the default title' }) => (
  <div className="max-w-screen-lg mx-auto py-16">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header />
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)
