import { gql } from '@apollo/client';

export const MenuFragment = gql`
  fragment MenuFragment on Menu {
    id
    handle
    title
    isDefault
    items {
      id
      title
      type
      url
    }
  }
`;