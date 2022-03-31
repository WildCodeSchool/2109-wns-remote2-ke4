import { gql, useQuery, QueryHookOptions } from '@apollo/client';

// VIEWER

interface Viewer {
  getViewer: {
    id: string;
    firstName: string;
    lastName: string;
    pseudo: string;
    fullName: string;
    email: string;
    description: string;
    avatar: string | null;
  };
}

const GET_VIEWER = gql`
  query GetViewer {
    getViewer {
      id
      firstName
      lastName
      pseudo
      fullName
      email
      description
      avatar
    }
  }
`;

export const useQueryViewer = (options?: QueryHookOptions<Viewer>) =>
  useQuery<Viewer>(GET_VIEWER, options);

// SEARCH USER

const SEARCH_SOMEONE = gql`
  query SearchUsers($search: String) {
    getSearchUser(search: $search) {
      id
      firstName
      lastName
      email
      avatar
      pseudo
    }
  }
`;

export const useQuerySearchUser = (options?: QueryHookOptions) =>
  useQuery(SEARCH_SOMEONE, options);
