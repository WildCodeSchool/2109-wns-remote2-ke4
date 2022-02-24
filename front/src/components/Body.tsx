import { Body } from '../elements/body.styled';

type Props = {
  children?: React.ReactNode;
  bBody?: string;
};

const BodyApp = ({ children, bBody }: Props) => {
  return <Body style={{ background: bBody }}>{children}</Body>;
};
export default BodyApp;
