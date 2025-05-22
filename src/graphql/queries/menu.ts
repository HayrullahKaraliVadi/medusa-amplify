import { gql } from '@apollo/client';
import { MenuFragment } from '../fragments/menuFragment';
import { PageInfoFragment } from '../fragments/pageInfoFragment';

export const GET_MENU = gql`
  query GetMenu($id: ID!) {
    menu(id: $id) {
      ...MenuFragment
    }
  }
  ${MenuFragment}
`;

export const GET_MENUS = gql`
  query GetMenus($page: Int = 1, $limit: Int = 10, $sort: [SortInput]) {
    menus(page: $page, limit: $limit, sort: $sort) {
      nodes {
        ...MenuFragment
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
  ${MenuFragment}
  ${PageInfoFragment}
`;