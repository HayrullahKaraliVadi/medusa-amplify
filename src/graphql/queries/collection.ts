import { gql } from '@apollo/client';
import { ProductFragment } from '../fragments/productFragment';
import { PageInfoFragment } from '../fragments/pageInfoFragment';

export const GET_COLLECTION = gql`
  query GetCollection($id: ID!) {
    collection(id: $id) {
      id
      title
      descriptionHtml
      createdAt
      updatedAt
      image {
        id
        url
        altText
        height
        width
      }
      products(page: $page, limit: $limit, sort: $sort) {
        nodes {
          ...ProductFragment
        }
        pageInfo {
          ...PageInfoFragment
        }
      }
    }
  }
  ${ProductFragment}
  ${PageInfoFragment}
`;