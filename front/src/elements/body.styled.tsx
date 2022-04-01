import { styled } from '@mui/styles';
import Box from '@mui/material/Box';

interface BodyProps {
  bBody: string;
}
// @ts-ignore
export const Body = styled(Box)<BodyProps>(() => ({
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  alignItems: 'end',
  position: 'relative',
}));
