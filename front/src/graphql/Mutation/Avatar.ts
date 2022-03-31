import { gql, useMutation, MutationHookOptions } from '@apollo/client';

const UPLOAD_AVATAR = gql`
  mutation UploadAvatar($file: Upload!) {
    uploadAvatar(file: $file)
  }
`;

export const useMutationUploadAvatar = (options?: MutationHookOptions) =>
  useMutation(UPLOAD_AVATAR, options);
