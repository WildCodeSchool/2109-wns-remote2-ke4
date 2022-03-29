import RegisterLogin from '../components/LoginRegister/RegisterLogin';
import LoginForm from '../components/LoginRegister/FormLogin';

const Register: React.FC<{ handleUrlPage: (url: string) => void }> = ({
  handleUrlPage,
}) => {
  return (
    <RegisterLogin type="login" handleUrlPage={handleUrlPage}>
      <LoginForm handleUrlPage={handleUrlPage} />
    </RegisterLogin>
  );
};
export default Register;
