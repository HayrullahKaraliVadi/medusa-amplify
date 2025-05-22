import { gql } from '@apollo/client';
import { CustomerFragment } from '../fragments/customerFragment';

export const CUSTOMER_ADDRESS_CREATE = gql`
  mutation CustomerAddressCreate($address: MailingAddressInput!) {
    customerAddressCreate(address: $address) {
      customerAddress {
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
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export const CUSTOMER_ADDRESS_UPDATE = gql`
  mutation CustomerAddressUpdate($address: MailingAddressInput!, $id: ID!) {
    customerAddressUpdate(address: $address, id: $id) {
      customerAddress {
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
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export const CUSTOMER_ADDRESS_DELETE = gql`
  mutation CustomerAddressDelete($id: ID!) {
    customerAddressDelete(id: $id) {
      deletedCustomerAddressId
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export const CUSTOMER_UPDATE = gql`
  mutation CustomerUpdate($customer: CustomerUpdateInput) {
    customerUpdate(customer: $customer) {
      customer {
        ...CustomerFragment
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
  ${CustomerFragment}
`;

export const CUSTOMER_DEFAULT_ADDRESS_UPDATE = gql`
  mutation CustomerDefaultAddressUpdate($addressId: ID!) {
    customerDefaultAddressUpdate(addressId: $addressId) {
      customer {
        ...CustomerFragment
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
  ${CustomerFragment}
`;