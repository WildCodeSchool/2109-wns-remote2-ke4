import RegisterLogin from '../components/LoginRegister/RegisterLogin';
import LoginForm from '../components/LoginRegister/FormLogin';
import { useParams } from 'react-router-dom';

const Register: React.FC<{ handleUrlPage: (url: string) => void }> = ({
  handleUrlPage,
}) => {
  const token = useParams();
  console.log(token);

  return (
    <RegisterLogin type="login" handleUrlPage={handleUrlPage}>
      <LoginForm handleUrlPage={handleUrlPage} />
    </RegisterLogin>
  );
};
export default Register;
