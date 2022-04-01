import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type FragmentColleagueFragment = { __typename?: 'TypeUser', id: string, firstName: string, lastName: string, fullName: string, pseudo: string, email: string, avatar?: string | null };

export type CreateWorkColleagueMutationVariables = Types.Exact<{
  workColleagueId: Types.Scalars['ID'];
}>;


export type CreateWorkColleagueMutation = { __typename?: 'RootMutation', createWorkColleague?: { __typename?: 'TypeUser', id: string, firstName: string, lastName: string, fullName: string, pseudo: string, email: string, avatar?: string | null } | null };

export type DeleteWorkColleagueMutationVariables = Types.Exact<{
  workColleagueId: Types.Scalars['ID'];
}>;


export type DeleteWorkColleagueMutation = { __typename?: 'RootMutation', deleteWorkColleague?: boolean | null };

export const FragmentColleagueFragmentDoc = gql`
    fragment FragmentColleague on TypeUser {
  id
  firstName
  lastName
  fullName
  pseudo
  email
  avatar
}
    `;
export const CreateWorkColleagueDocument = gql`
    mutation CreateWorkColleague($workColleagueId: ID!) {
  createWorkColleague(workColleagueId: $workColleagueId) {
    ...FragmentColleague
  }
}
    ${FragmentColleagueFragmentDoc}`;
export type CreateWorkColleagueMutationFn = Apollo.MutationFunction<CreateWorkColleagueMutation, CreateWorkColleagueMutationVariables>;

/**
 * __useCreateWorkColleagueMutation__
 *
 * To run a mutation, you first call `useCreateWorkColleagueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkColleagueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkColleagueMutation, { data, loading, error }] = useCreateWorkColleagueMutation({
 *   variables: {
 *      workColleagueId: // value for 'workColleagueId'
 *   },
 * });
 */
export function useCreateWorkColleagueMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorkColleagueMutation, CreateWorkColleagueMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWorkColleagueMutation, CreateWorkColleagueMutationVariables>(CreateWorkColleagueDocument, options);
      }
export type CreateWorkColleagueMutationHookResult = ReturnType<typeof useCreateWorkColleagueMutation>;
export type CreateWorkColleagueMutationResult = Apollo.MutationResult<CreateWorkColleagueMutation>;
export type CreateWorkColleagueMutationOptions = Apollo.BaseMutationOptions<CreateWorkColleagueMutation, CreateWorkColleagueMutationVariables>;
export const DeleteWorkColleagueDocument = gql`
    mutation DeleteWorkColleague($workColleagueId: ID!) {
  deleteWorkColleague(workColleagueId: $workColleagueId)
}
    `;
export type DeleteWorkColleagueMutationFn = Apollo.MutationFunction<DeleteWorkColleagueMutation, DeleteWorkColleagueMutationVariables>;

/**
 * __useDeleteWorkColleagueMutation__
 *
 * To run a mutation, you first call `useDeleteWorkColleagueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWorkColleagueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWorkColleagueMutation, { data, loading, error }] = useDeleteWorkColleagueMutation({
 *   variables: {
 *      workColleagueId: // value for 'workColleagueId'
 *   },
 * });
 */
export function useDeleteWorkColleagueMutation(baseOptions?: Apollo.MutationHookOptions<DeleteWorkColleagueMutation, DeleteWorkColleagueMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteWorkColleagueMutation, DeleteWorkColleagueMutationVariables>(DeleteWorkColleagueDocument, options);
      }
export type DeleteWorkColleagueMutationHookResult = ReturnType<typeof useDeleteWorkColleagueMutation>;
export type DeleteWorkColleagueMutationResult = Apollo.MutationResult<DeleteWorkColleagueMutation>;
export type DeleteWorkColleagueMutationOptions = Apollo.BaseMutationOptions<DeleteWorkColleagueMutation, DeleteWorkColleagueMutationVariables>;