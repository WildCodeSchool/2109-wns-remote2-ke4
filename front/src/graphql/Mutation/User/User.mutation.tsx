import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateUserMutationVariables = Types.Exact<{
  firstName?: Types.InputMaybe<Types.Scalars['String']>;
  lastName?: Types.InputMaybe<Types.Scalars['String']>;
  email?: Types.InputMaybe<Types.Scalars['String']>;
  mdp?: Types.InputMaybe<Types.Scalars['String']>;
  description?: Types.InputMaybe<Types.Scalars['String']>;
  pseudo?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type CreateUserMutation = { __typename?: 'RootMutation', registerUser: string };

export type UpdateUserMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['ID']>;
  firstName?: Types.InputMaybe<Types.Scalars['String']>;
  lastName?: Types.InputMaybe<Types.Scalars['String']>;
  email?: Types.InputMaybe<Types.Scalars['String']>;
  description?: Types.InputMaybe<Types.Scalars['String']>;
  pseudo?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type UpdateUserMutation = { __typename?: 'RootMutation', updateUser: { __typename?: 'TypeUser', id: string, firstName: string, lastName: string, email: string, description?: string | null, pseudo: string } };

export type LoginUserMutationVariables = Types.Exact<{
  email?: Types.InputMaybe<Types.Scalars['String']>;
  mdp?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type LoginUserMutation = { __typename?: 'RootMutation', login: string };

export type PasswordForgotMutationVariables = Types.Exact<{
  email?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type PasswordForgotMutation = { __typename?: 'RootMutation', passwordForgot: boolean };

export type ResetPasswordMutationVariables = Types.Exact<{
  tokenURL?: Types.InputMaybe<Types.Scalars['String']>;
  newMdp?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type ResetPasswordMutation = { __typename?: 'RootMutation', resetPassword: boolean };

export type ResetPasswordViewerMutationVariables = Types.Exact<{
  oldPassword?: Types.InputMaybe<Types.Scalars['String']>;
  newMdp?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type ResetPasswordViewerMutation = { __typename?: 'RootMutation', resetPasswordViewer?: boolean | null };


export const CreateUserDocument = gql`
    mutation CreateUser($firstName: String, $lastName: String, $email: String, $mdp: String, $description: String, $pseudo: String) {
  registerUser(
    firstName: $firstName
    lastName: $lastName
    email: $email
    mdp: $mdp
    description: $description
    pseudo: $pseudo
  )
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      mdp: // value for 'mdp'
 *      description: // value for 'description'
 *      pseudo: // value for 'pseudo'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: ID, $firstName: String, $lastName: String, $email: String, $description: String, $pseudo: String) {
  updateUser(
    id: $id
    firstName: $firstName
    lastName: $lastName
    email: $email
    description: $description
    pseudo: $pseudo
  ) {
    id
    firstName
    lastName
    email
    description
    pseudo
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      description: // value for 'description'
 *      pseudo: // value for 'pseudo'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($email: String, $mdp: String) {
  login(email: $email, mdp: $mdp)
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      mdp: // value for 'mdp'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const PasswordForgotDocument = gql`
    mutation PasswordForgot($email: String) {
  passwordForgot(email: $email)
}
    `;
export type PasswordForgotMutationFn = Apollo.MutationFunction<PasswordForgotMutation, PasswordForgotMutationVariables>;

/**
 * __usePasswordForgotMutation__
 *
 * To run a mutation, you first call `usePasswordForgotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePasswordForgotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [passwordForgotMutation, { data, loading, error }] = usePasswordForgotMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function usePasswordForgotMutation(baseOptions?: Apollo.MutationHookOptions<PasswordForgotMutation, PasswordForgotMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PasswordForgotMutation, PasswordForgotMutationVariables>(PasswordForgotDocument, options);
      }
export type PasswordForgotMutationHookResult = ReturnType<typeof usePasswordForgotMutation>;
export type PasswordForgotMutationResult = Apollo.MutationResult<PasswordForgotMutation>;
export type PasswordForgotMutationOptions = Apollo.BaseMutationOptions<PasswordForgotMutation, PasswordForgotMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($tokenURL: String, $newMdp: String) {
  resetPassword(tokenURL: $tokenURL, newMdp: $newMdp)
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      tokenURL: // value for 'tokenURL'
 *      newMdp: // value for 'newMdp'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const ResetPasswordViewerDocument = gql`
    mutation ResetPasswordViewer($oldPassword: String, $newMdp: String) {
  resetPasswordViewer(oldPassword: $oldPassword, newMdp: $newMdp)
}
    `;
export type ResetPasswordViewerMutationFn = Apollo.MutationFunction<ResetPasswordViewerMutation, ResetPasswordViewerMutationVariables>;

/**
 * __useResetPasswordViewerMutation__
 *
 * To run a mutation, you first call `useResetPasswordViewerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordViewerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordViewerMutation, { data, loading, error }] = useResetPasswordViewerMutation({
 *   variables: {
 *      oldPassword: // value for 'oldPassword'
 *      newMdp: // value for 'newMdp'
 *   },
 * });
 */
export function useResetPasswordViewerMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordViewerMutation, ResetPasswordViewerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordViewerMutation, ResetPasswordViewerMutationVariables>(ResetPasswordViewerDocument, options);
      }
export type ResetPasswordViewerMutationHookResult = ReturnType<typeof useResetPasswordViewerMutation>;
export type ResetPasswordViewerMutationResult = Apollo.MutationResult<ResetPasswordViewerMutation>;
export type ResetPasswordViewerMutationOptions = Apollo.BaseMutationOptions<ResetPasswordViewerMutation, ResetPasswordViewerMutationVariables>;