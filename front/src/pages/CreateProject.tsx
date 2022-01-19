import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { makeStyles, createStyles } from '@mui/styles';
import CancelIcon from '@mui/icons-material/Cancel';
import background from '../images/background.jpg';
import avatar1 from '../images/avatar1.jpg';
import avatar2 from '../images/avatar2.jpg';
import avatar3 from '../images/avatar3.jpg';
import imgCreateProject from '../images/imgCreateProject.jpeg';
import ModalAssignCreate from '../Components/ModalAssignCreate';
import LuxonUtils from '@mui/lab/AdapterLuxon';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

// import { gql, useMutation, useQuery } from "@apollo/client";
// import Alert from "@mui/material/Alert";

// const MUTATION_PROJECT = gql`
//     mutation CreateProject(
//       $name:String!
//       $dateDue:String!
//       description:String!

//     ){
//       createProject(
//         name:$name
//         dateDue:$dateDue
//         description:$description
//       )
//     }
// `;

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: 1200,
      width: '100%',
      background: '#fff',
      border: '2px solid #000',
      borderRadius: '25px',
      boxShadow: '24px',

      zIndex: 1,
      minHeight: '500px',
    },
  })
);

const CreateProject = () => {
  const classes = useStyles();

  // State
  const [title, setTitle] = useState('');
  const [arrayDev, setArrayDev] = useState([
    {
      id: 'zfozekfeoz',
      image: avatar1,
    },
    {
      id: 'zefnzelkf',
      image: avatar2,
    },
    {
      id: 'zekfzekfm',
      image: avatar3,
    },
  ]);
  const [open, setOpen] = useState<boolean>(false);
  const [dateDue, setDateDue] = useState<Date | null>(new Date());
  const [description, setDescription] = useState<string>('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteDevInCreateProject = (id: string) => {
    setArrayDev((el) => el.filter((element) => element.id !== id));
  };

  // const [createProject, { loading, error }] = useMutation(MUTATION_PROJECT);

  // const onSubmit = async () => {
  //   await createProject({
  //     variables: {
  //       name: title,
  //       description: description,
  //       dateDue: dateDue,
  //     },
  //   });
  // };

  return (
    <div
      style={{
        background: `url(${background})`,
        width: '100%',
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box className={classes.root} component="form">
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px 0px',
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h2"
            style={{ margin: '25px 0px' }}
          >
            New Project
          </Typography>
          <Grid item sx={{ width: '70%', marginBottom: '30px' }}>
            <TextField
              data-testid="title"
              required
              error={!title}
              label="Titre"
              helperText="Ce champs est requis"
              style={{ width: '100%' }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid sx={{ width: '70%' }}>
            <LocalizationProvider
              dateAdapter={LuxonUtils}
              style={{ marginBottom: '20px' }}
              locale="fr"
            >
              <DatePicker
                label="Date Due"
                value={dateDue}
                disablePast
                onChange={(date: Date | null) => {
                  setDateDue(date);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{ marginBottom: '20px', width: '100%' }}
                    data-testid="dateDue"
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item sx={{ width: '70%', marginBottom: '30px' }}>
            <TextField
              data-testid="description"
              label="Description"
              multiline
              rows={3}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              style={{ width: '100%' }}
            />
          </Grid>
          <Button
            style={{
              background: '#07DFCD',
              color: '#fff',
              margin: '25px 0px',
              padding: '10px 10px',
            }}
            onClick={handleOpen}
          >
            + Inviter des utilisateurs
          </Button>
          <Grid
            item
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '40px',
            }}
            data-testid="AvatarDev"
          >
            {arrayDev.map((f) => (
              <div
                style={{
                  height: '50px',
                  width: '50px',
                  borderRadius: '50%',
                  position: 'relative',
                  marginLeft: '15px',
                  cursor: 'pointer',
                  zIndex: 2,
                  background: `url(${f.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                key={f.id}
              >
                <CancelIcon
                  style={{
                    position: 'absolute',
                    top: -5,
                    right: 0,
                    height: '20px',
                    width: '20px',
                    color: '#000',
                    zIndex: 3,
                  }}
                  onClick={() => deleteDevInCreateProject(f.id)}
                  data-testid="delete"
                ></CancelIcon>
              </div>
            ))}
          </Grid>

          <Button
            style={{
              background: '#07DFCD',
              color: '#fff',
              padding: '10px 10px',
              opacity: title !== '' ? 1 : 0.2,
            }}
            type="submit"
            disabled={title === ''}
          >
            Create Project
          </Button>
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            background: `url(${imgCreateProject})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderTopRightRadius: '20px',
            borderBottomRightRadius: '20px',
            display: {
              xs: 'none',
              sm: 'none',
              md: 'flex',
              lg: 'flex',
            },
          }}
        ></Grid>
      </Box>
      <ModalAssignCreate open={open} handleClose={handleClose} />
    </div>
  );
};
export default CreateProject;
