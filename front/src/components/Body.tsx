import { Body } from '../elements/body.styled';

type Props = {
  children?: React.ReactNode;
};

const BodyApp = ({ children }: Props) => {
  return <Body>{children}</Body>;
};
export default BodyApp;
