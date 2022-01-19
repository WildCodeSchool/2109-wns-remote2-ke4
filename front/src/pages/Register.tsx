import RegisterLogin from '../Components/Ui/RegisterLogin';
import RegisterForm from '../Components/FormRegister';

const Register = () => {
  return (
    <RegisterLogin type="register" labelBtn="Creer un compte">
      <RegisterForm />
    </RegisterLogin>
  );
};
export default Register;
