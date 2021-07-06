import { useQuery } from "@apollo/client"
import { gql } from "@apollo/client/core"
import { useRouter } from "next/dist/client/router"
import { RepositoryDocument } from "@/lib/graphql/generated"
import { NextPage } from "next"

gql`
fragment repository on Repository {
  id
  name
  stargazerCount
  description
}

query repository($name: String!) {
  user(login: "aki77") {
    repository(name: $name) {
      ...repository
    }
  }
}
`

const RepositoryPage: NextPage = () => {
  const router = useRouter()
  const { name } = router.query
  const { data, loading } = useQuery(RepositoryDocument, { variables: { name }})
  const repository = data?.user?.repository

  if (loading) return <p>loading...</p>
  if (!repository) return <p>not found</p>

  return (
    <>
      <h1>{repository.name}</h1>
      <div>
        {repository.description}
      </div>
    </>
  )
}

export default RepositoryPage
