// app/[countryCode]/page.tsx
import { GET_COLLECTIONS } from "../../../graphql/queries/collections"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { getServerApolloClient } from "graphql/apollo-server"

export default async function Home() {

  const client = getServerApolloClient();

  const { data: collectionsData } = await client.query({
    query: GET_COLLECTIONS
  })
  const collections = collectionsData?.collections?.nodes
  console.log("collections:", collections)
  if (!collections ) return null

  return (
    <>
      <Hero />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} />
        </ul>
      </div>
    </>
  )
}
