import { gql } from '@apollo/client';
import { ProductFragment } from '../fragments/productFragment';
import { PageInfoFragment } from '../fragments/pageInfoFragment';

export const GET_PRODUCTS = gql`
  query GetProducts($page: Int = 1, $limit: Int = 10, $sort: [SortInput]) {
    products(page: $page, limit: $limit, sort: $sort) {
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