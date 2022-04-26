import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetAllMyProjectsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllMyProjectsQuery = { __typename?: 'RootQueries', getAllProjectsByViewer?: Array<{ __typename?: 'TypeProject', id?: string | null, name?: string | null, author?: string | null, client?: string | null, status?: string | null, description?: string | null, investedTime?: string | null, estimatedTime?: string | null, numberDev?: number | null, isFavorite?: boolean | null, createdAt?: any | null, devs?: Array<{ __typename?: 'TypeUser', id: string, email: string, fullName: string, pseudo: string, avatar?: string | null } | null> | null, tickets?: Array<{ __typename?: 'TypeTicket', id?: string | null, name?: string | null } | null> | null } | null> | null };

export type GetAllMyProjectsNavbarQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllMyProjectsNavbarQuery = { __typename?: 'RootQueries', getAllProjectsByViewer?: Array<{ __typename?: 'TypeProject', id?: string | null, name?: string | null } | null> | null };


export const GetAllMyProjectsDocument = gql`
    query GetAllMyProjects {
  getAllProjectsByViewer {
    id
    name
    author
    client
    status
    description
    investedTime
    estimatedTime
    numberDev
    isFavorite
    createdAt
    devs {
      id
      email
      fullName
      pseudo
      avatar
    }
    tickets {
      id
      name
    }
  }
}
    `;

/**
 * __useGetAllMyProjectsQuery__
 *
 * To run a query within a React component, call `useGetAllMyProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMyProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMyProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllMyProjectsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllMyProjectsQuery, GetAllMyProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMyProjectsQuery, GetAllMyProjectsQueryVariables>(GetAllMyProjectsDocument, options);
      }
export function useGetAllMyProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMyProjectsQuery, GetAllMyProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMyProjectsQuery, GetAllMyProjectsQueryVariables>(GetAllMyProjectsDocument, options);
        }
export type GetAllMyProjectsQueryHookResult = ReturnType<typeof useGetAllMyProjectsQuery>;
export type GetAllMyProjectsLazyQueryHookResult = ReturnType<typeof useGetAllMyProjectsLazyQuery>;
export type GetAllMyProjectsQueryResult = Apollo.QueryResult<GetAllMyProjectsQuery, GetAllMyProjectsQueryVariables>;
export const GetAllMyProjectsNavbarDocument = gql`
    query GetAllMyProjectsNavbar {
  getAllProjectsByViewer {
    id
    name
  }
}
    `;

/**
 * __useGetAllMyProjectsNavbarQuery__
 *
 * To run a query within a React component, call `useGetAllMyProjectsNavbarQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMyProjectsNavbarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMyProjectsNavbarQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllMyProjectsNavbarQuery(baseOptions?: Apollo.QueryHookOptions<GetAllMyProjectsNavbarQuery, GetAllMyProjectsNavbarQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMyProjectsNavbarQuery, GetAllMyProjectsNavbarQueryVariables>(GetAllMyProjectsNavbarDocument, options);
      }
export function useGetAllMyProjectsNavbarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMyProjectsNavbarQuery, GetAllMyProjectsNavbarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMyProjectsNavbarQuery, GetAllMyProjectsNavbarQueryVariables>(GetAllMyProjectsNavbarDocument, options);
        }
export type GetAllMyProjectsNavbarQueryHookResult = ReturnType<typeof useGetAllMyProjectsNavbarQuery>;
export type GetAllMyProjectsNavbarLazyQueryHookResult = ReturnType<typeof useGetAllMyProjectsNavbarLazyQuery>;
export type GetAllMyProjectsNavbarQueryResult = Apollo.QueryResult<GetAllMyProjectsNavbarQuery, GetAllMyProjectsNavbarQueryVariables>;