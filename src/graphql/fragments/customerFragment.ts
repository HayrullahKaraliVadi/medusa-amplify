import { gql } from '@apollo/client';

export const CustomerFragment = gql`
  fragment CustomerFragment on Customer {
    id
    email
    firstName
    lastName
    phone
    acceptsMarketing
    createdAt
    updatedAt
    defaultAddress {
      id
      address1
      address2
      city
      country
      countryCode
      firstName
      lastName
      phone
      zip
    }
    addresses {
      id
      address1
      address2
      city
      country
      countryCode
      firstName
      lastName
      phone
      zip
    }
  }
`;