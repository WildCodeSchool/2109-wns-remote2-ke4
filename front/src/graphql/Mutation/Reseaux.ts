import { gql, useMutation, MutationHookOptions } from '@apollo/client';

// CREATE WORK_COLLEAGUE

export const fragmentColleague = gql`
  fragment FragmentColleague on TypeUser {
    id
    firstName
    lastName
    fullName
    email
    avatar
  }
`;

const CREATE_WORK_COLLEAGUE = gql`
  mutation CreateWorkColleague($workColleagueId: ID!) {
    createWorkColleague(workColleagueId: $workColleagueId) {
      ...FragmentColleague
    }
  }
  ${fragmentColleague}
`;

export const useMutationCreateWorkColleague = (options?: MutationHookOptions) =>
  useMutation(CREATE_WORK_COLLEAGUE, options);

// DELETE WORK_COLLEAGUE

const DELETE_WORK_COLLEAGUE = gql`
  mutation DeleteWorkColleague($workColleagueId: ID!) {
    deleteWorkColleague(workColleagueId: $workColleagueId)
  }
`;

export const useMutationDeleteWorkColleague = (options?: MutationHookOptions) =>
  useMutation(DELETE_WORK_COLLEAGUE, options);
