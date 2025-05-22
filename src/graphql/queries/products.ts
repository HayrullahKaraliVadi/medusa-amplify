import { gql } from '@apollo/client';
import { ProductFragment } from '../fragments/productFragment';
import { PageInfoFragment } from '../fragments/pageInfoFragment';


export const GET_PRODUCTS = gql`
  query GetProducts(
    $page: Int = 1,
    $limit: Int = 10,
    $sort: [SortInput],
    $params: ProductParams
  ) {
    products(page: $page, limit: $limit, sort: $sort, params: $params) {
      nodes {
        ...ProductFragment
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
  ${ProductFragment}
  ${PageInfoFragment}
`;
