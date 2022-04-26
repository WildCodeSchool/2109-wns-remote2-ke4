import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetViewerQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetViewerQuery = { __typename?: 'RootQueries', getViewer?: { __typename?: 'TypeUser', id: string, firstName: string, lastName: string, pseudo: string, fullName: string, email: string, description?: string | null, avatar?: string | null, numberFriendly?: number | null, dateMember?: string | null } | null };

export type SearchUsersQueryVariables = Types.Exact<{
  search?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type SearchUsersQuery = { __typename?: 'RootQueries', getSearchUser?: Array<{ __typename?: 'TypeUser', id: string, firstName: string, lastName: string, email: string, avatar?: string | null, pseudo: string } | null> | null };

export type GetManyDevsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetManyDevsQuery = { __typename?: 'RootQueries', getManyDevAssign?: Array<{ __typename?: 'TypeUser', id: string, firstName: string, lastName: string, email: string, avatar?: string | null, pseudo: string } | null> | null };


export const GetViewerDocument = gql`
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
    numberFriendly
    dateMember
  }
}
    `;

/**
 * __useGetViewerQuery__
 *
 * To run a query within a React component, call `useGetViewerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetViewerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetViewerQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetViewerQuery(baseOptions?: Apollo.QueryHookOptions<GetViewerQuery, GetViewerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetViewerQuery, GetViewerQueryVariables>(GetViewerDocument, options);
      }
export function useGetViewerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetViewerQuery, GetViewerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetViewerQuery, GetViewerQueryVariables>(GetViewerDocument, options);
        }
export type GetViewerQueryHookResult = ReturnType<typeof useGetViewerQuery>;
export type GetViewerLazyQueryHookResult = ReturnType<typeof useGetViewerLazyQuery>;
export type GetViewerQueryResult = Apollo.QueryResult<GetViewerQuery, GetViewerQueryVariables>;
export const SearchUsersDocument = gql`
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

/**
 * __useSearchUsersQuery__
 *
 * To run a query within a React component, call `useSearchUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchUsersQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useSearchUsersQuery(baseOptions?: Apollo.QueryHookOptions<SearchUsersQuery, SearchUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchUsersQuery, SearchUsersQueryVariables>(SearchUsersDocument, options);
      }
export function useSearchUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchUsersQuery, SearchUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchUsersQuery, SearchUsersQueryVariables>(SearchUsersDocument, options);
        }
export type SearchUsersQueryHookResult = ReturnType<typeof useSearchUsersQuery>;
export type SearchUsersLazyQueryHookResult = ReturnType<typeof useSearchUsersLazyQuery>;
export type SearchUsersQueryResult = Apollo.QueryResult<SearchUsersQuery, SearchUsersQueryVariables>;
export const GetManyDevsDocument = gql`
    query GetManyDevs {
  getManyDevAssign {
    id
    firstName
    lastName
    email
    avatar
    pseudo
  }
}
    `;

/**
 * __useGetManyDevsQuery__
 *
 * To run a query within a React component, call `useGetManyDevsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetManyDevsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetManyDevsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetManyDevsQuery(baseOptions?: Apollo.QueryHookOptions<GetManyDevsQuery, GetManyDevsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetManyDevsQuery, GetManyDevsQueryVariables>(GetManyDevsDocument, options);
      }
export function useGetManyDevsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetManyDevsQuery, GetManyDevsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetManyDevsQuery, GetManyDevsQueryVariables>(GetManyDevsDocument, options);
        }
export type GetManyDevsQueryHookResult = ReturnType<typeof useGetManyDevsQuery>;
export type GetManyDevsLazyQueryHookResult = ReturnType<typeof useGetManyDevsLazyQuery>;
export type GetManyDevsQueryResult = Apollo.QueryResult<GetManyDevsQuery, GetManyDevsQueryVariables>;