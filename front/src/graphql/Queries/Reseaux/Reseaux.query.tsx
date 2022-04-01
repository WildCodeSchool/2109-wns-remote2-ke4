import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetAllColleaguesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllColleaguesQuery = { __typename?: 'RootQueries', getManyWorkColleague?: Array<{ __typename?: 'TypeUser', id: string, firstName: string, lastName: string, fullName: string, pseudo: string, email: string, avatar?: string | null } | null> | null };


export const GetAllColleaguesDocument = gql`
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

/**
 * __useGetAllColleaguesQuery__
 *
 * To run a query within a React component, call `useGetAllColleaguesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllColleaguesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllColleaguesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllColleaguesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllColleaguesQuery, GetAllColleaguesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllColleaguesQuery, GetAllColleaguesQueryVariables>(GetAllColleaguesDocument, options);
      }
export function useGetAllColleaguesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllColleaguesQuery, GetAllColleaguesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllColleaguesQuery, GetAllColleaguesQueryVariables>(GetAllColleaguesDocument, options);
        }
export type GetAllColleaguesQueryHookResult = ReturnType<typeof useGetAllColleaguesQuery>;
export type GetAllColleaguesLazyQueryHookResult = ReturnType<typeof useGetAllColleaguesLazyQuery>;
export type GetAllColleaguesQueryResult = Apollo.QueryResult<GetAllColleaguesQuery, GetAllColleaguesQueryVariables>;