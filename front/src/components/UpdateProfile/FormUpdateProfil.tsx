import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import ViewerContext from '../../context/Viewer';
import Button from '@mui/material/Button';
import { useMutationUpdaterUser } from '../../graphql/Mutation/User';
import { updateUserSchema } from '../../yup/UpdateUser';
import { useFormik } from 'formik';

const GridContainerUpdate = styled(Grid)(({ theme }) => ({
  padding: '0px 20px',

  [theme.breakpoints.down('md')]: {
    padding: '0px 50px',
  },
}));

const ButtonUpdate = styled(Button)(() => ({
  padding: '10px 20px',
  background: '#07DFCD',
  color: '#FFF',
  marginTop: '35px',
}));

const Form = styled('form')(() => ({
  width: '100%',
  maxWidth: '900px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const LoginUpdateProfil = () => {
  const viewer = useContext(ViewerContext);
  console.log('Viewer', viewer);

  const [updateUser, { loading }] = useMutationUpdaterUser();

  const onSubmit = async (values: any) => {
    await updateUser({
      variables: {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        mdp: values.mdp,
        description: values.description,
        pseudo: values.pseudo,
      },
    });
  };
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      description: '',
      pseudo: '',
    },
    validationSchema: updateUserSchema,
    onSubmit: (values: any) => {
      onSubmit(values);
    },
  });
  const handleChange = (key: string, newValue: any) => {
    formik.setValues({
      ...formik.values,
      [key]: newValue,
    });
  };

  return (
    <Form>
      <GridContainerUpdate container spacing={1}>
        <Grid item md={6} sm={12} xs={12}>
          <TextField
            id="outlined-required"
            fullWidth
            label="Prenom"
            variant="outlined"
            margin="normal"
            value={formik.values.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <TextField
            id="outlined-required"
            fullWidth
            label="Nom"
            variant="outlined"
            margin="normal"
            value={formik.values.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <TextField
            id="outlined-required"
            fullWidth
            label="Pseudo"
            variant="outlined"
            margin="normal"
            value={formik.values.pseudo}
            onChange={(e) => handleChange('pseudo', e.target.value)}
            error={formik.touched.pseudo && Boolean(formik.errors.pseudo)}
            helperText={formik.touched.pseudo && formik.errors.pseudo}
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <TextField
            id="outlined-required"
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={formik.values.email}
            onChange={(e) => handleChange('email', e.target.value)}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>

        <Grid item md={6} sm={12} xs={12}>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={2}
            value={formik.values.description}
            onChange={(e) => handleChange('description', e.target.value)}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
        </Grid>
      </GridContainerUpdate>
      <ButtonUpdate type="submit" disabled={loading}>
        Modifier
      </ButtonUpdate>
    </Form>
  );
};
export default LoginUpdateProfil;
