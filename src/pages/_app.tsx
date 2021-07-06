import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import { VFC } from 'react'
import { createApolloClient } from '@/lib/apollo'

const client = createApolloClient()

const App: VFC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
