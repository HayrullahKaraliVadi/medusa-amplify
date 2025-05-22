import { gql } from '@apollo/client';

export const PageInfoFragment = gql`
  fragment PageInfoFragment on PageInfo {
    totalCount
    totalPages
    currentPage
    hasNextPage
    hasPreviousPage
  }
`;