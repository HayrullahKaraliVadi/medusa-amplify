import { Text, clx } from "@medusajs/ui"
import { VariantPrice } from "types/global"

export default function PreviewPrice({ price }: { price: any }) {
  if (!price) {
    return null
  }

  return (
    <>
      {/*{price.price_type === "sale" && (*/}
      {/*  <Text*/}
      {/*    className="line-through text-ui-fg-muted"*/}
      {/*    data-testid="original-price"*/}
      {/*  >*/}
      {/*    {price.original_price}*/}
      {/*  </Text>*/}
      {/*)}*/}
      <Text
        className={clx("text-ui-fg-muted", )}
        data-testid="price"
      >
        {price}
      </Text>
    </>
  )
}
