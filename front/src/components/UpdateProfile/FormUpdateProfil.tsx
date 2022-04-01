import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useFormik } from 'formik';
import { updateUserSchema } from '../../yup/UpdateUser';
import Button from '@mui/material/Button';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { TypeUser } from '../../types';
import { useUpdateUserMutation } from '../../graphql/Mutation/User/User.mutation';

const GridContainerUpdate = styled(Grid)(({ theme }) => ({
  padding: '0px 150px',

  [theme.breakpoints.down('md')]: {
    padding: '0px 50px',
  },
}));

const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '1100px',
}));
const ButtonSend = styled(Button)(() => ({
  padding: '10px 15px',
  background: '#07DFCD',
  fontWeight: 'bold',
  fontSize: '17px',
  color: '#FFF',
  maxWidth: '150px',
  cursor: 'pointer',
}));
const ButtonPass = styled(Button)(() => ({
  padding: '10px 15px',
  background: 'transparent',
  fontWeight: 'bold',
  fontSize: '17px',
  color: '#000',
  border: '1px solid #000',
  maxWidth: '180px',
  marginLeft: '15px',
  cursor: 'pointer',
}));

const Div = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginTop: '16px',
}));

const UpdateProfil: React.FC<{ viewer: TypeUser | undefined | null }> = ({
  viewer,
}) => {
  const [updateUser, { loading }] = useUpdateUserMutation();
  const history = useHistory();
  const onSubmit = async (values: any) => {
    const { firstName, lastName, email, description, pseudo } = values;
    await updateUser({
      variables: {
        firstName,
        lastName,
        email,
        description,
        pseudo,
      },
      onCompleted: () => {
        toast.success('Vos informations ont bien été sauvegarder');
      },
      onError: (err) => toast.error(err.message),
    });
  };
  const formik = useFormik({
    initialValues: {
      firstName: viewer?.firstName,
      lastName: viewer?.lastName,
      email: viewer?.email,
      description: viewer?.description,
      pseudo: viewer?.pseudo,
    },
    validationSchema: updateUserSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });
  const handleChange = (key: string, newValue: any) => {
    formik.setValues({
      ...formik.values,
      [key]: newValue,
    });
  };

  const oldDataSame =
    formik.values.firstName === viewer?.firstName &&
    formik.values.lastName === viewer?.lastName &&
    formik.values.pseudo === viewer?.pseudo &&
    formik.values.description === viewer?.description &&
    formik.values.email === viewer?.email;

  return (
    <Form onSubmit={formik.handleSubmit}>
      <GridContainerUpdate container spacing={1}>
        <Grid item md={6} sm={12} xs={12}>
          <TextField
            id="outlined-required"
            fullWidth
            label="Prenom"
            name="firstName"
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
            helperText={formik.touched.email && formik.errors.firstName}
          />
        </Grid>

        <Grid item sm={12} xs={12}>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={3}
            value={formik.values.description}
            onChange={(e) => handleChange('description', e.target.value)}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
        </Grid>
      </GridContainerUpdate>
      <Div>
        <ButtonSend type="submit" disabled={loading || oldDataSame}>
          Sauvegarder
        </ButtonSend>
        <ButtonPass onClick={() => history.push('/updatepassword')}>
          Modifier mot de passe
        </ButtonPass>
      </Div>
    </Form>
  );
};
export default UpdateProfil;
