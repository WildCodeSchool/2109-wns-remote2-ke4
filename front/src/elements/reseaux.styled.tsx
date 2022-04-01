import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

interface Image {
  image: string;
}

export const BoxContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '900px',
  borderRadius: '15px',
  marginTop: '25px',
  background: '#fff',
  padding: '20px 20px 80px 20px',
});

export const Container = styled('div')({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  backgroundColor: 'transparent',
});

export const Title = styled(Typography)(() => ({
  margin: '25px 0px',
}));

export const Avatar = styled('div')<Image>(({ image }) => ({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  marginRight: '10px',
  backgroundImage: image,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  marginLeft: '15px',
}));

export const DivOption = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
  cursor: 'pointer',
});

export const SpanEmail = styled('span')({
  marginLeft: '10px',
  opacity: '0.5',
});

export const Line = styled('div')({
  width: '60%',
  height: '1px',
  background: '#000',
  opacity: 0.3,
  margin: '30px 0px',
});

export const DivListColleague = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '70%',
  marginTop: '20px',
});

export const DivColleague = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '15px',
});

export const AvatarList = styled('div')<Image>(({ image }) => ({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  marginRight: '10px',
  backgroundImage: image,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
}));

export const FullName = styled('span')({
  marginLeft: '10px',
  opacity: '0.5',
  fontSize: '20px',
});

export const IconRemove = styled(PersonRemoveIcon)({
  fontSize: '30px',
  cursor: 'pointer',
});
