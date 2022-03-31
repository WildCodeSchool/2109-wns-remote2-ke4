import { gql, useMutation, MutationHookOptions } from '@apollo/client';

// REGISTER

export const REGISTER_USER = gql`
  mutation CreateUser(
    $firstName: String
    $lastName: String
    $email: String
    $mdp: String
    $description: String
    $pseudo: String
  ) {
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

export const useMutationRegisterUser = (options?: MutationHookOptions) =>
  useMutation(REGISTER_USER, options);

// UPDATE USER

export const UPDATE_USER = gql`
  mutation UpdateUser(
    $id: ID
    $firstName: String
    $lastName: String
    $email: String
    $description: String
    $pseudo: String
  ) {
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

export const useMutationUpdaterUser = (options?: MutationHookOptions) =>
  useMutation(UPDATE_USER, options);

// LOGIN

export const LOGIN_USER = gql`
  mutation LoginUser($email: String, $mdp: String) {
    login(email: $email, mdp: $mdp)
  }
`;

export const useMutationLogin = (options?: MutationHookOptions) =>
  useMutation(LOGIN_USER, options);

// PASSWORD FORGOT

export const FORGOT_MDP = gql`
  mutation PasswordForgot($email: String) {
    passwordForgot(email: $email)
  }
`;

export const useMutationForgotPassword = (options?: MutationHookOptions) =>
  useMutation(FORGOT_MDP, options);
export interface ValueResetMdpUser {
  email: string;
}

// RESET PASSWORD LOGIN

export const RESET_PASSWORD = gql`
  mutation ResetPassword($tokenURL: String, $newMdp: String) {
    resetPassword(tokenURL: $tokenURL, newMdp: $newMdp)
  }
`;

export const useMutationResetPassword = (options?: MutationHookOptions) =>
  useMutation(RESET_PASSWORD, options);

// RESET PASSWORD VIEWER

export const RESET_PASSWORD_VIEWER = gql`
  mutation ResetPasswordViewer($oldPassword: String, $newMdp: String) {
    resetPasswordViewer(oldPassword: $oldPassword, newMdp: $newMdp)
  }
`;

export const useMutationResetPasswordViewer = (options?: MutationHookOptions) =>
  useMutation(RESET_PASSWORD_VIEWER, options);
