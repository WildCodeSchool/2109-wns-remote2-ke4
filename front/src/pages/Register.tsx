import RegisterLogin from '../components/LoginRegister/RegisterLogin';
import RegisterForm from '../components/LoginRegister/FormRegister';

const Register: React.FC<{ handleUrlPage: (url: string) => void }> = ({
  handleUrlPage,
}) => {
  return (
    <RegisterLogin type="register" handleUrlPage={handleUrlPage}>
      <RegisterForm handleUrlPage={handleUrlPage} />
    </RegisterLogin>
  );
};
export default Register;
