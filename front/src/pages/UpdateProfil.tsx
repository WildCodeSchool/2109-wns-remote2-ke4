import Typography from '@mui/material/Typography';
import defaultAvatar from '../assets/images/default_profile.png';
import { makeStyles, createStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import FormUpdateProfil from '../components/UpdateProfile/FormUpdateProfil';
import { useRef } from 'react';
import { TypeUser } from '../types';
import { useUploadAvatarMutation } from '../graphql/Mutation/Avatar/Avatar.mutation';

const AvatarUpdate = styled('div')(() => ({
  width: '100%',
  height: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  borderRadius: '50%',
}));

const FabLabel = styled(Fab)(() => ({
  width: '50px',
  height: '50px',
  background: '#07DFCD',
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
      margin: '50px 0px 20px 0px!important',
      fontSize: '40px',
      fontWeight: 'bold',
    },
    blocAvatar: {
      minWidth: '160px',
      minHeight: '160px',
      maxWidth: '160px',
      maxHeight: '160px',
      position: 'relative',
      borderRadius: '50%',
      marginBottom: '25px',
    },
    label: {
      position: 'absolute',
      bottom: -10,
      right: 0,
      zIndex: 2,
    },
    none: {
      display: 'none',
    },
  })
);

const UpdateProfil: React.FC<{ viewer: TypeUser | undefined | null }> = ({
  viewer,
}) => {
  const classes = useStyles();

  const [updateAvatar, { loading }] = useUploadAvatarMutation();
  const fileInput = useRef(null);

  return (
    <div className={classes.container}>
      <Typography variant="inherit" className={classes.title}>
        Modification Profil
      </Typography>
      <div className={classes.blocAvatar}>
        <AvatarUpdate
          style={{
            backgroundImage: viewer?.avatar
              ? `url(http://localhost:4000/avatar/${viewer?.avatar})`
              : `url(${defaultAvatar})`,
          }}
        />
        <label htmlFor="upload-avatar" className={classes.label}>
          <input
            accept={'images/jpeg,images/png,images/pdf'}
            id="upload-avatar"
            name="upload-avatar"
            type="file"
            ref={fileInput}
            className={classes.none}
            onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
              if (!e.target.files) {
                return;
              }

              const file = e.target.files[0];

              updateAvatar({
                variables: {
                  file: file ? file : 'kelk',
                },
              });
            }}
          />
          <FabLabel
            onClick={() => {
              //@ts-ignore
              fileInput.current.click();
            }}
          >
            <PhotoCameraIcon />
          </FabLabel>
        </label>
      </div>
      <FormUpdateProfil viewer={viewer} />
    </div>
  );
};
export default UpdateProfil;
