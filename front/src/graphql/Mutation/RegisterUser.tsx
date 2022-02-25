import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation CreateUser(
    $firstName: String
    $name: String
    $email: String
    $mdp: String
    $description: String
  ) {
    registerUser(
      firstName: $firstName
      name: $name
      email: $email
      mdp: $mdp
      description: $description
    )
  }
`;

export interface ValuesRegisterUser {
  firstName: string;
  name: string;
  email: string;
  mdp: string;
  description: string;
}
