import RegisterLogin from '../components/LoginRegister/RegisterLogin';
import LoginForm from '../components/LoginRegister/FormLogin';

const Register = () => {
  return (
    <RegisterLogin type="login" labelBtn="Connect">
      <LoginForm />
    </RegisterLogin>
  );
};
export default Register;
