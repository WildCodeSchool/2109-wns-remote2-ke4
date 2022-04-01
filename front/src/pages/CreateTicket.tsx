import {
  BoxContainer,
  GridLeft,
  GridMargin,
  Input,
  Title,
  AvatarDiv,
  BoxAvatarDev,
  Cancel,
} from '../elements/createProject.styles';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import imgCreateProject from '../assets/images/imgCreateProject.jpeg';
import Grid from '@mui/material/Grid';
import { makeStyles, createStyles } from '@mui/styles';
import {
  Alert,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';
import { LocalizationProvider } from '@mui/lab';
import LuxonUtils from '@mui/lab/AdapterLuxon';
import ModalAssignCreate from '../components/CreateProject/ModalAssignCreate';
import { devArrayNotAssign } from '../libs/const';
import { ErrorSharp } from '@mui/icons-material';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
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
    doubleInput: {
      display: 'flex',
      flexDirection: 'row',
    },
  })
);

const columnsFromBackend = {
  assigned: {
    name: 'Assigned',
    items: [],
  },
  notAssigned: {
    name: 'Not Assigned',
    items: devArrayNotAssign,
  },
};

const CreateTicket = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [project, setProject] = useState<String>('');
  const projects = ['project1', 'project2']; // MOCK
  const [description, setDescription] = useState('');
  const [open, setOpen] = useState<boolean>(false);
  const [columns, setColumns] = useState(columnsFromBackend);
  const [estimatedTimeUnit, setEstimatedTimeUnit] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [dueDate, setdueDate] = useState<Date | null>(new Date());
  const [ressources, setRessources] = useState<String[]>([]);
  const [newRessource, setNewRessource] = useState<String>('');
  const [priority, setPriority] = useState('');
  const [errorValidation, setErrorValidation] = useState<String[]>([]);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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

  useEffect(() => {}, [columns]);

  function submission() {
    let errors = [];
    if (
      name !== '' &&
      priority !== '' &&
      project !== '' &&
      description !== '' &&
      startDate &&
      dueDate &&
      startDate <= dueDate
    ) {
      console.log('fetch de la morkitu');
      return;
    }
    if (name === '') {
      errors.push('name');
    }
    if (priority === '') {
      errors.push('priority');
    }
    if (project === '') {
      errors.push('project');
    }
    if (description === '') {
      errors.push('description');
    }
    if (!startDate || !dueDate || startDate > dueDate) {
      errors.push('dates');
    }
    if (errors.length > 0) {
      setErrorValidation(errors);
    }
  }

  return (
    <BoxContainer>
      <Box className={classes.root} component="form">
        <GridLeft item md={6} sm={12} xs={12}>
          <Title variant="h2">New Ticket</Title>
          <GridMargin item>
            <Box className={classes.doubleInput}>
              <Input
                required
                sx={{ marginRight: 2 }}
                label="Name"
                helperText="This field is required"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <FormControl sx={{ m: 1, minWidth: 120, margin: 0 }} required>
                <InputLabel id="priority-select-label">Priority</InputLabel>
                <Select
                  labelId="priority-select-label"
                  id="priority-simple-select"
                  value={priority}
                  label="Priority"
                  onChange={(event) => {
                    setPriority(event.target.value);
                  }}
                >
                  <MenuItem value={'low'}>Low</MenuItem>
                  <MenuItem value={'medium'}>Medium</MenuItem>
                  <MenuItem value={'high'}>High</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              {errorValidation.includes('name') ? (
                <Alert severity="warning">
                  Les valeurs renseignées sont invalides
                </Alert>
              ) : (
                <></>
              )}
            </Box>
          </GridMargin>
          <GridMargin>
            <FormControl sx={{ m: 1, width: '100%', margin: 0 }} required>
              <InputLabel id="project-select-label">
                Project associated
              </InputLabel>
              <Select
                labelId="project-select-label"
                id="project-simple-select"
                value={project}
                required
                label="Project associated"
                onChange={(event) => {
                  setProject(event.target.value);
                }}
              >
                {projects.map((p, index) => {
                  return (
                    <MenuItem key={index} value={p}>
                      {p}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            {errorValidation.includes('project') ? (
              <Alert severity="warning" sx={{ marginTop: 2 }}>
                La valeur renseignée est invalide
              </Alert>
            ) : (
              <></>
            )}
          </GridMargin>
          <GridMargin item>
            <Input
              required
              label="Description"
              multiline
              rows={3}
              helperText="This field is required"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {errorValidation.includes('description') ? (
              <Alert severity="warning">
                La valeur renseignée est invalide
              </Alert>
            ) : (
              <></>
            )}
          </GridMargin>
          <GridMargin item>
            <Button onClick={handleOpen}>+ Inviter des utilisateurs</Button>
            <BoxAvatarDev data-testid="AvatarDev">
              {columns.assigned.items.map((item: any) => (
                <AvatarDiv
                  style={{
                    background: `url(${item.image})`,
                  }}
                  key={item.id}
                >
                  <Cancel
                    onClick={() => removeDev(item.id)}
                    data-testid="delete"
                  ></Cancel>
                </AvatarDiv>
              ))}
            </BoxAvatarDev>
          </GridMargin>
          <GridMargin item>
            <Box className={classes.doubleInput}>
              <Input
                sx={{ marginRight: 2 }}
                label="Estimated time"
                value={estimatedTime}
                onChange={(e) => setEstimatedTime(e.target.value)}
              />
              <FormControl sx={{ m: 1, minWidth: 120, margin: 0 }} required>
                <InputLabel id="priority-select-label">Units</InputLabel>
                <Select
                  labelId="priority-select-label"
                  id="priority-simple-select"
                  value={estimatedTimeUnit}
                  label="Priority"
                  onChange={(event) => {
                    setEstimatedTimeUnit(event.target.value);
                  }}
                >
                  <MenuItem value={'hours'}>Hours</MenuItem>
                  <MenuItem value={'days'}>Days</MenuItem>
                  <MenuItem value={'weeks'}>Weeks</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </GridMargin>
          <GridMargin>
            <Box className={classes.doubleInput}>
              <LocalizationProvider
                dateAdapter={LuxonUtils}
                style={{}}
                locale="fr"
              >
                <DatePicker
                  label="Start date"
                  value={startDate}
                  disablePast
                  onChange={(date: Date | null) => {
                    setStartDate(date);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{ marginRight: 2 }}
                      data-testid="dateDue"
                    />
                  )}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={LuxonUtils} locale="fr">
                <DatePicker
                  label="Due date"
                  value={dueDate}
                  disablePast
                  onChange={(date: Date | null) => {
                    setdueDate(date);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{ marginRight: 2 }}
                      data-testid="dateDue"
                    />
                  )}
                />
              </LocalizationProvider>
            </Box>
            {errorValidation.includes('dates') ? (
              <Alert severity="warning" sx={{ marginTop: 2 }}>
                les valeurs renseignées sont invalides
              </Alert>
            ) : (
              <></>
            )}
          </GridMargin>
          <GridMargin>
            <Input
              sx={{ marginRight: 2 }}
              label="Ressource"
              value={newRessource}
              onChange={(e) => setNewRessource(e.target.value)}
            />
            <Button
              variant="outlined"
              sx={{ marginTop: '5px', marginRight: '5px' }}
              onClick={() => {
                if (newRessource !== '') {
                  setRessources([...ressources, newRessource]);
                  setNewRessource('');
                }
              }}
            >
              ajouter ressource
            </Button>
            {ressources.map((ressource, index) => {
              return (
                <Chip
                  sx={{ margin: '4px' }}
                  key={index}
                  label={ressource}
                  onDelete={(e) => {
                    const temp = ressources.filter((res) => res !== ressource);
                    setRessources(temp);
                  }}
                />
              );
            })}
          </GridMargin>
          <GridMargin>
            <Button
              variant="outlined"
              onClick={() => {
                submission();
              }}
            >
              Enregistrer
            </Button>
          </GridMargin>
        </GridLeft>
        <Grid
          item
          md={6}
          style={{
            background: `url(${imgCreateProject})`,
          }}
        ></Grid>
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

export default CreateTicket;
