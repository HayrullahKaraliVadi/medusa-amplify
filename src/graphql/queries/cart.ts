import { gql } from '@apollo/client';
import { CartFragment } from '../fragments/cartFragment';

export const GET_CART = gql`
  query GetCart($id: ID!) {
    cart(id: $id) {
      ...CartFragment
    }
  }
  ${CartFragment}
`;