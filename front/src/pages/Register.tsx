import RegisterLogin from '../components/LoginRegister/RegisterLogin';
import RegisterForm from '../components/LoginRegister/FormRegister';

const Register = () => {
  return (
    <RegisterLogin type="register" labelBtn="Creer un compte">
      <RegisterForm />
    </RegisterLogin>
  );
};
export default Register;
