import { gql } from '@apollo/client';

export const CartFragment = gql`
  fragment CartFragment on Cart {
    id
    checkoutUrl
    createdAt
    updatedAt
    totalQuantity
    note
    cost {
      checkoutChargeAmount {
        amount
        currencyCode
      }
      subtotalAmount {
        amount
        currencyCode
      }
      subtotalAmountEstimated
      totalAmount {
        amount
        currencyCode
      }
      totalAmountEstimated
    }
    buyerIdentity {
      email
      phone
      countryCode
      customer {
        id
        email
        firstName
        lastName
        phone
      }
    }
    delivery {
      addresses {
        id
        selected
        oneTimeUse
        address {
          CartDeliveryAddress {
            address1
            address2
            city
            company
            countryCode
            firstName
            lastName
            phone
            zip
          }
        }
      }
    }
    lines {
      id
      quantity
      merchandise {
        ProductVariant {
          id
          title
          price
          inventoryQuantity
        }
      }
      cost {
        totalAmount {
          amount
          currencyCode
        }
      }
    }
  }
`;