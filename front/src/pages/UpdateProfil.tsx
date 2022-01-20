import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import avatar from '../images/avatar1.jpg';
import { makeStyles, createStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import FormUpdateProfil from '../components/UpdateProfile/FormUpdateProfil';

const AvatarUpdate = styled(Avatar)(() => ({
  width: '100%',
  height: '100%',
}));

const FabLabel = styled(Fab)(() => ({
  width: '45px',
  height: '45px',
  background: '#07DFCD',
}));

const ButtonUpdate = styled(Button)(() => ({
  padding: '10px 20px',
  background: '#07DFCD',
  color: '#FFF',
  marginTop: '35px',
}));

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
    title: {
      margin: '80px 0px 20px 0px!important',
      fontSize: '40px',
      fontWeight: 'bold',
    },
    blocAvatar: {
      minWidth: '120px',
      minHeight: '120px',
      maxWidth: '120px',
      maxHeight: '120px',
      position: 'relative',
      borderRadius: '50%',
      marginBottom: '25px',
    },
    label: {
      position: 'absolute',
      bottom: -20,
      right: 0,
      zIndex: 2,
    },
    none: {
      display: 'none',
    },
  })
);

const UpdateProfil = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="inherit" className={classes.title}>
        Modification Profil
      </Typography>
      <div className={classes.blocAvatar}>
        <AvatarUpdate src={avatar} alt="avatar" />
        <label htmlFor="upload-avatar" className={classes.label}>
          <input
            accept={'images/jpeg,images/png,images/pdf'}
            id="upload-avatar"
            name="upload-avatar"
            type="file"
            className={classes.none}
          />
          <FabLabel>
            <PhotoCameraIcon />
          </FabLabel>
        </label>
      </div>
      <FormUpdateProfil />
      <ButtonUpdate>Modifier</ButtonUpdate>
    </div>
  );
};
export default UpdateProfil;
