import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

interface BoxProps {
  bgColor: string;
}

interface ProgressProps {
  progressHeight: number;
  bgColor: string;
}

export const Container = styled(Box)({
  width: '100%',
  maxWidth: '450px',
  minWidth: '450px',
  height: '400px',
  border: '1px solid #000',
  borderRadius: '20px',
  background: '#fff',
});

export const CardTop = styled(Box)<BoxProps>(({ bgColor }) => ({
  width: '100%',
  height: '20%',
  background: bgColor,
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const BoxTop = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '20px',
  maxWidth: '60%',
  textOverflow: 'ellipsis',
});

export const NameProject = styled(Typography)({
  fontSize: '30px',
  marginLeft: '15px',
  fontWeight: 'bold',
  color: '#fff',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  display: 'block',
  width: '100%',
  minWidth: '1px',
});

export const AvatarDev = styled(Avatar)({
  width: '50px',
  height: '50px',
});

export const CardContent = styled(Box)({
  width: '100%',
  height: '80%',
  background: '#fff',
  borderBottomLeftRadius: '20px',
  borderBottomRightRadius: '20px',
  display: 'flex',
  overflow: 'hidden',
});

export const LeftContent = styled(Box)({
  width: '70%',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  padding: '30px',
});

export const NameTicket = styled(Typography)({
  fontSize: '35px',
  fontWeight: 'bold',
});
export const BtnCard = styled(Button)({
  width: '50%',
  maxWidth: '250px',
  background: '#C37575',
  color: '#fff',
  marginTop: '25px',
  '&:hover': {
    background: '#C37575',
  },
});

export const Line = styled('div')({
  width: '100%',
  height: '1px',
  background: '#000',
  marginTop: '55px',
  opacity: 0.2,
});

export const BoxBottom = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '35px',
});

export const TextDateUpdated = styled(Typography)({
  fontSize: '25px',
  fontWeight: 'bold',
  opacity: 0.2,
});

export const RightContent = styled(Box)({
  width: '30%',
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '30px 0px',
});

export const TextProgressive = styled(Typography)({
  fontSize: '25px',
  fontWeight: 'bold',
});

export const ContainerBarProgressive = styled(Box)({
  height: '190px',
  width: '5px',
  background: '#F5E5E5',
  display: 'flex',
  alignItems: 'end',
});

export const BarProgressive = styled(Box)<ProgressProps>(
  ({ progressHeight, bgColor }) => ({
    height: `${progressHeight}%`,
    width: '100%',
    background: bgColor,
  })
);
