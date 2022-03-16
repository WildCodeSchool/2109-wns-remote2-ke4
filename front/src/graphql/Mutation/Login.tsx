import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation LoginUser($email: String, $mdp: String) {
    login(email: $email, mdp: $mdp)
  }
`;

export const RESET_MDP = gql`
  mutation PasswordForgot($email: String) {
    passwordForgot(email: $email)
  }
`;
export interface ValueResetMdpUser {
  email: string;
}

export interface ValuesLoginUser {
  email: string;
  mdp: string;
}
