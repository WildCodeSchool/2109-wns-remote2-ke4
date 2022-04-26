import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { makeStyles, createStyles } from '@mui/styles';
import imgCreateProject from '../assets/images/imgCreateProject.jpeg';
import ModalAssignCreate from '../components/CreateProject/ModalAssignCreate';
import LuxonUtils from '@mui/lab/AdapterLuxon';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import {
  AvatarDiv,
  BoxAvatarDev,
  BoxContainer,
  ButtonCreate,
  GridLeft,
  GridMargin,
  GridOne,
  GridTime,
  Input,
  Title,
} from '../elements/createProject.styles';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { useFormik } from 'formik';
import { projectSchema } from '../yup/Project';
import Cancel from '@mui/icons-material/Cancel';
import {
  FragmentProjectFragmentDoc,
  useCreateProjectMutation,
} from '../graphql/Mutation/Project/Project.mutation';
import { useGetManyDevsQuery } from '../graphql/Queries/User/User.query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import defaultAvatar from '../assets/images/default_profile.png';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      margin: '50px',
      maxWidth: 1200,
      width: '100%',
      background: '#fff',
      border: '2px solid #000',
      borderRadius: '25px',
      boxShadow: '24px',
      overflow: 'hidden',

      zIndex: 1,
      minHeight: '500px',
    },
    form: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  })
);

const CreateProject = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { data, loading: dataLoading } = useGetManyDevsQuery();
  const [columns, setColumns] = useState<{
    assigned: { name: string; items: any[] };
    notAssigned: { name: string; items: any[] };
  }>({
    assigned: {
      name: 'Assigned',
      items: [],
    },
    notAssigned: {
      name: 'Not Assigned',
      items: [],
    },
  });
  const [open, setOpen] = useState<boolean>(false);
  const [createProject, { loading }] = useCreateProjectMutation();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = async (values: any) => {
    await createProject({
      variables: {
        name: values?.title,
        description: values?.description,
        date: values?.dateDue,
        client: values?.societe,
        estimatedTime: values?.time + ' ' + formatOptionTime,
        user: columns.assigned.items.map((item: any) => item.id),
      },
      onCompleted: (data) => {
        toast.success(
          `Le Projet ${data?.createProject?.name} a été créé avec succès`
        );
        setTimeout(() => {
          navigate('/ke4');
        }, 4000);
      },
      onError: (error) => toast.error(error.message),
      update: (cache, { data: { createProject } }: any) => {
        cache.modify({
          //@ts-ignore

          fields: {
            getAllProjectsByViewer(existingProject = []) {
              const newProject = cache.writeFragment({
                data: createProject,
                fragment: FragmentProjectFragmentDoc,
              });
              const result = [...existingProject, newProject];
              return result;
            },
          },
        });
      },
    });
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      societe: '',
      time: '',
      optionTime: '',
      dateDue: '',
      description: '',
    },
    validationSchema: projectSchema,
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

  const removeDev = (id: string) => {
    let columnsCopy = {
      ...columns,
      assigned: {
        name: columns.assigned.name,
        items: [...columns.assigned.items],
      },
      notAssigned: {
        name: columns.notAssigned.name,
        items: [...columns.notAssigned.items],
      },
    };
    let itemToMove: any;
    columnsCopy.assigned.items = columnsCopy.assigned.items.filter(
      (item: any) => {
        itemToMove = item;
        return item.id !== id;
      }
    );
    columnsCopy.notAssigned.items.push(itemToMove);
    setColumns(columnsCopy);
  };

  const formatOptionTime =
    formik.values?.time === '1'
      ? formik.values?.optionTime
          .split('')
          .filter((el) => el !== 's')
          .join('')
      : formik.values?.optionTime;

  useEffect(() => {
    setColumns({
      assigned: {
        name: 'Assigned',
        items: [],
      },
      notAssigned: {
        name: 'Not Assigned',
        items: data?.getManyDevAssign || [],
      },
    });
  }, [data?.getManyDevAssign]);

  return (
    <BoxContainer>
      <Box
        className={classes.root}
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <Grid container>
          <GridLeft item md={6} sm={12} xs={12}>
            <Title id="modal-modal-title" variant="h2">
              New Project
            </Title>
            <GridMargin item>
              <Input
                data-testid="title"
                label="Titre"
                value={formik.values.title}
                onChange={(e) => handleChange('title', e.target.value)}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
              />
            </GridMargin>
            <GridOne>
              <LocalizationProvider
                dateAdapter={LuxonUtils}
                style={{ marginBottom: '20px' }}
                locale="fr"
              >
                <DatePicker
                  label="Date Due"
                  disablePast
                  value={formik.values.dateDue}
                  onChange={(date: Date | null) =>
                    handleChange('dateDue', date)
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      error={
                        formik.touched.dateDue && Boolean(formik.errors.dateDue)
                      }
                      helperText={
                        formik.touched.dateDue && formik.errors.dateDue
                      }
                      sx={{ marginBottom: '20px', width: '100%' }}
                      data-testid="dateDue"
                    />
                  )}
                />
              </LocalizationProvider>
            </GridOne>
            <GridMargin item>
              <Input
                label="Client"
                value={formik.values.societe}
                onChange={(e) => handleChange('societe', e.target.value)}
                error={formik.touched.societe && Boolean(formik.errors.societe)}
                helperText={formik.touched.societe && formik.errors.societe}
              />
            </GridMargin>
            <GridTime container>
              <Grid item sm={7}>
                <Input
                  label="Temps estimé"
                  value={formik.values.time}
                  onChange={(e) => handleChange('time', e.target.value)}
                  error={formik.touched.time && Boolean(formik.errors.time)}
                  helperText={formik.touched.time && formik.errors.time}
                />
              </Grid>
              <Grid sm={4} item>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Unité</InputLabel>
                  <Select
                    value={formik.values.optionTime}
                    onChange={(e) => handleChange('optionTime', e.target.value)}
                    error={
                      formik.touched.optionTime &&
                      Boolean(formik.errors.optionTime)
                    }
                  >
                    <MenuItem value={'jours'}>jours</MenuItem>
                    <MenuItem value={'mois'}>mois</MenuItem>
                    <MenuItem value={'années'}>années</MenuItem>
                  </Select>
                  {formik.touched.optionTime && formik.errors.optionTime && (
                    <FormHelperText error>
                      {formik.touched.optionTime && formik.errors.optionTime}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </GridTime>

            <GridMargin item>
              <Input
                data-testid="description"
                label="Description"
                multiline
                rows={3}
                value={formik.values.description}
                onChange={(e) => handleChange('description', e.target.value)}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
            </GridMargin>
            <Button onClick={handleOpen}>+ Inviter des utilisateurs</Button>
            <BoxAvatarDev data-testid="AvatarDev">
              {columns.assigned.items.map((item: any) => (
                <AvatarDiv
                  style={{
                    background: item?.avatar
                      ? `url(http://localhost:4000/avatar/${item?.avatar})`
                      : `url(${defaultAvatar})`,
                  }}
                  key={item.id}
                >
                  <Cancel
                    onClick={() => removeDev(item.id)}
                    data-testid="delete"
                    style={{
                      fontSize: '27px',
                      color: '#07DFCD',
                      top: -10,
                      right: -10,
                      position: 'absolute',
                    }}
                  />
                </AvatarDiv>
              ))}
            </BoxAvatarDev>

            <ButtonCreate
              style={{
                opacity: formik.values.title !== '' ? 1 : 0.2,
              }}
              type="submit"
              disabled={formik.values.title === '' || loading}
            >
              Create Project
            </ButtonCreate>
          </GridLeft>
          <Grid
            item
            md={6}
            style={{
              background: `url(${imgCreateProject})`,
            }}
          ></Grid>
        </Grid>
      </Box>
      <ModalAssignCreate
        open={open}
        handleClose={handleClose}
        columns={columns}
        setColumns={setColumns}
      />
    </BoxContainer>
  );
};
export default CreateProject;
