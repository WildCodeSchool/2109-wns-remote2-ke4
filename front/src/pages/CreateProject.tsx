import React, { useState } from 'react';
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
  BoxContainer,
  ButtonCreate,
  GridLeft,
  GridMargin,
  GridOne,
  GridTime,
  Input,
  Title,
} from '../elements/createProject.styled';
import { devArrayNotAssign } from '../libs/const';
import { v4 as uuidv4 } from 'uuid';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      marginTop: '10px',
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
  })
);

const columnsFromBackend = {
  [uuidv4()]: {
    name: 'Assigned',
    items: [],
  },
  [uuidv4()]: {
    name: 'Not Assigned',
    items: devArrayNotAssign,
  },
};

const CreateProject = () => {
  const classes = useStyles();

  // State
  const [columns, setColumns] = useState(columnsFromBackend);
  const [title, setTitle] = useState('');
  const [societe, setSociete] = useState('');
  const [time, setTime] = useState('');
  const [optionTime, setOptionTime] = useState('');
  const [open, setOpen] = useState<boolean>(false);
  const [dateDue, setDateDue] = useState<Date | null>(new Date());
  const [description, setDescription] = useState<string>('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <BoxContainer>
      <Box className={classes.root} component="form">
        <Grid container>
          <GridLeft item md={6} sm={12} xs={12}>
            <Title id="modal-modal-title" variant="h2">
              New Project
            </Title>
            <GridMargin item>
              <Input
                data-testid="title"
                required
                error={!title}
                label="Titre"
                helperText="Ce champs est requis"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
            </GridOne>
            <GridMargin item>
              <Input
                label="Client"
                value={societe}
                onChange={(e) => setSociete(e.target.value)}
              />
            </GridMargin>
            <GridTime container>
              <Grid item sm={7}>
                <Input
                  label="Temps estimé"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </Grid>
              <Grid sm={4}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Unité</InputLabel>
                  <Select
                    value={optionTime}
                    onChange={(e) => setOptionTime(e.target.value)}
                  >
                    <MenuItem value={'jours'}>jours</MenuItem>
                    <MenuItem value={'mois'}>mois</MenuItem>
                    <MenuItem value={'années'}>années</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </GridTime>

            <GridMargin item>
              <Input
                data-testid="description"
                label="Description"
                multiline
                rows={3}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </GridMargin>
            <Button onClick={handleOpen}>+ Inviter des utilisateurs</Button>

            <ButtonCreate
              style={{
                opacity: title !== '' ? 1 : 0.2,
              }}
              onClick={() => {}}
              disabled={title === ''}
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
