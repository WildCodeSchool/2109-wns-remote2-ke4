import { gql, useQuery, QueryHookOptions } from '@apollo/client';

// GET ALL COLLEAGUES

const GET_ALL_COLLEAGUES = gql`
  query GetAllColleagues {
    getManyWorkColleague {
      id
      firstName
      lastName
      fullName
      pseudo
      email
      avatar
    }
  }
`;

export const useQueryAllColleagues = (options?: QueryHookOptions) =>
  useQuery(GET_ALL_COLLEAGUES, options);
