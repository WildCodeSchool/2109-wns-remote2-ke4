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
    }
  }
`;

export const useQueryViewer = (options?: QueryHookOptions<Viewer>) =>
  useQuery<Viewer>(GET_VIEWER, options);
