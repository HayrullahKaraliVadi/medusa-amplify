// import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { useQuery } from "@apollo/client"
import { GET_PRODUCTS } from "../../../../../graphql/queries/products"
import { getServerApolloClient } from "../../../../../graphql/apollo-server"

export default async function ProductRail({
  collection,
  // region,
}: {
  collection: HttpTypes.StoreCollection
  // region: HttpTypes.StoreRegion
}) {

  const client = getServerApolloClient();
  const { data } = await client.query({
    query: GET_PRODUCTS,
    variables: {
      params: {
        collectionId: collection.id
      }
    }
  })
  // const {
  //   data: data,
  //   loading: loadingProducts,
  //   error: errorProducts,
  // } = useQuery(GET_PRODUCTS,{
  //   variables: {
  //     params: {
  //       collectionId: collection.id,
  //     }
  //   }
  // })

  console.log("products:", data)
  // const {
  //   response: { products: pricedProducts },
  // } = await listProducts({
  //   // regionId: region.id,
  //   queryParams: {
  //     collection_id: collection.id,
  //     fields: "*variants.calculated_price",
  //   },
  // })

  // if (!data || !data?.products || data.products.nodes) {
  //   return null
  // }

  return (
    <div className="content-container py-12 small:py-24">
      <div className="flex justify-between mb-8">
        <Text className="txt-xlarge">{collection.title}</Text>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          View all
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-3 gap-x-6 gap-y-24 small:gap-y-36">
        { data?.products?.nodes.map((product:any) => (
            <li key={product.id}>
              <ProductPreview product={product} isFeatured />
            </li>
          ))}
      </ul>
    </div>
  )
}
