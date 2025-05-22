import { gql } from '@apollo/client';

export const GET_COLLECTIONS = gql`
  query GetCollections(
    $page: Int = 1,
    $limit: Int = 10,
    $sort: [SortInput]
  ) {
    collections(page: $page, limit: $limit, sort: $sort) {
      nodes {
        id
        createdAt
        updatedAt
        descriptionHtml
        title
        handle
      }
      pageInfo { 
        totalCount
        currentPage
        totalPages
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
