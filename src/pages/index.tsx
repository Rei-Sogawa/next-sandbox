import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client/core'
import Link from 'next/link'
import { useMemo } from 'react'
import Layout from '@/components/Layout'
import { RepositoriesDocument } from '@/lib/graphql/generated'

gql`
query repositories {
  user(login: "aki77") {
    repositories(last: 10) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
}
`

const IndexPage = () => {
  const { data, loading } = useQuery(RepositoriesDocument)
  const repositories = useMemo(() => {
    if (!data?.user?.repositories?.edges) return []

    return data.user.repositories.edges.map((edge) => edge.node!)
  }, [data])

  if (loading) return <p>loading...</p>

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <ul>
        {repositories.map((repository) => (
          <li key={repository.id}>
            <Link href={`/repositories/${repository.name}`} as={`/repositories/${repository.name}`}>
              <a>{repository.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
