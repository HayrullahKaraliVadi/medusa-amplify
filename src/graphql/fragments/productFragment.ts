import { gql } from '@apollo/client';

export const ProductFragment = gql`
  fragment ProductFragment on Product {
    id
    title
    handle
    descriptionHtml
    createdDate
    publishedDate
    status
    totalInventory
    tracksInventory
    vendor
    variants {
      id
      title
      price
      inventoryQuantity
      sku
    }
    options {
      id
      name
      optionValues {
        id
        value
      }
    }
  }
`;