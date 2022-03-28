import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  //@ts-ignore
  const { token } = useParams<{ token: string }>();
  return <p>{token as string}</p>;
};
export default ResetPassword;
