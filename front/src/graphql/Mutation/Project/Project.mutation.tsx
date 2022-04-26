import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type FragmentProjectFragment = { __typename?: 'TypeProject', id?: string | null, name?: string | null, author?: string | null, client?: string | null, status?: string | null, description?: string | null, investedTime?: string | null, estimatedTime?: string | null, numberDev?: number | null, isFavorite?: boolean | null, createdAt?: any | null };

export type CreateProjectMutationVariables = Types.Exact<{
  name?: Types.InputMaybe<Types.Scalars['String']>;
  client?: Types.InputMaybe<Types.Scalars['String']>;
  description?: Types.InputMaybe<Types.Scalars['String']>;
  date?: Types.InputMaybe<Types.Scalars['Date']>;
  estimatedTime?: Types.InputMaybe<Types.Scalars['String']>;
  user?: Types.InputMaybe<Array<Types.InputMaybe<Types.Scalars['ID']>> | Types.InputMaybe<Types.Scalars['ID']>>;
}>;


export type CreateProjectMutation = { __typename?: 'RootMutation', createProject?: { __typename?: 'TypeProject', id?: string | null, name?: string | null, author?: string | null, client?: string | null, status?: string | null, description?: string | null, investedTime?: string | null, estimatedTime?: string | null, numberDev?: number | null, isFavorite?: boolean | null, createdAt?: any | null } | null };

export const FragmentProjectFragmentDoc = gql`
    fragment FragmentProject on TypeProject {
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
}
    `;
export const CreateProjectDocument = gql`
    mutation CreateProject($name: String, $client: String, $description: String, $date: Date, $estimatedTime: String, $user: [ID]) {
  createProject(
    name: $name
    client: $client
    description: $description
    date: $date
    estimatedTime: $estimatedTime
    user: $user
  ) {
    ...FragmentProject
  }
}
    ${FragmentProjectFragmentDoc}`;
export type CreateProjectMutationFn = Apollo.MutationFunction<CreateProjectMutation, CreateProjectMutationVariables>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      name: // value for 'name'
 *      client: // value for 'client'
 *      description: // value for 'description'
 *      date: // value for 'date'
 *      estimatedTime: // value for 'estimatedTime'
 *      user: // value for 'user'
 *   },
 * });
 */
export function useCreateProjectMutation(baseOptions?: Apollo.MutationHookOptions<CreateProjectMutation, CreateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProjectMutation, CreateProjectMutationVariables>(CreateProjectDocument, options);
      }
export type CreateProjectMutationHookResult = ReturnType<typeof useCreateProjectMutation>;
export type CreateProjectMutationResult = Apollo.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<CreateProjectMutation, CreateProjectMutationVariables>;