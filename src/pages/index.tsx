import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client/core'
import { NextPage } from 'next'
import Link from 'next/link'
import { useMemo } from 'react'
import { Layout } from '@/components/Layout'
import { RepositoriesDocument } from '@/lib/graphql/generated'

gql`
  query repositories {
    user(login: "Rei-Sogawa") {
      repositories(last: 100) {
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

const IndexPage: NextPage = () => {
  const { data, loading } = useQuery(RepositoriesDocument)
  const repositories = useMemo(() => {
    if (!data?.user?.repositories?.edges) return []

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return data.user.repositories.edges.map((edge) => edge.node!)
  }, [data])

  if (loading) return <p>loading...</p>

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1 className="text-4xl font-extrabold">Hello Next.js 👋</h1>
      <ul className="mt-5 list-inside list-disc">
        {repositories.map((repository) => (
          <li key={repository.id} className="text-gray-500 hover:text-gray-900">
            <Link href={`/repositories/${repository.name}`} as={`/repositories/${repository.name}`}>
              {repository.name}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
