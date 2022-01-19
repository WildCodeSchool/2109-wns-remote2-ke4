import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import avatar1 from '../images/avatar1.jpg';
import avatar2 from '../images/avatar2.jpg';
import avatar3 from '../images/avatar3.jpg';
import avatar4 from '../images/avatar4.jpg';
import avatar5 from '../images/avatar5.jpg';
import avatar6 from '../images/avatar6.jpg';
import Avatar from '@mui/material/Avatar';
import { capitalize } from '../libs/utils';

const devArrayAssign = [
  {
    id: 1,
    image: avatar1,
    assign: true,
    name: 'Thomas Thbaut',
  },
  {
    id: 2,
    image: avatar2,
    assign: true,
    name: 'Yunus Jsp',
  },
  {
    id: 3,
    image: avatar3,
    assign: true,
    name: 'Pierre-Hugo Maillet',
  },
];

const devArrayNotAssign = [
  {
    id: 1,
    image: avatar4,
    assign: false,
    name: 'Lochlain Jsp',
  },
  {
    id: 2,
    image: avatar5,
    assign: false,
    name: 'Nissim Jsp',
  },
  {
    id: 3,
    image: avatar6,
    assign: false,
    name: 'Maxime Vallee',
  },
];

const ModalAssignCreateProject: React.FC<{
  open: boolean;
  handleClose: () => void;
}> = ({ open, handleClose }) => {
  const [stateDevArrayAssign, setDevArrayAssign] = useState(devArrayAssign);
  const [stateDevArrayNotAssign, setDevArrayNotAssign] =
    useState(devArrayNotAssign);
  const [searchAssignDev, setSearchAssignDev] = useState('');
  const [searchNotAssignDev, setNotSearchAssignDev] = useState('');

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <TableContainer
        data-testid="table-modal"
        sx={{
          maxWidth: 900,
          width: '100%',
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',

          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          overflow: 'hidden',
        }}
        component={Paper}
      >
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ borderRight: '1px solid #000' }}>
                <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                  Assigned
                </Typography>
                <TextField
                  sx={{ width: '70%' }}
                  label="Search"
                  value={searchAssignDev}
                  onChange={(e) => setSearchAssignDev(e.target.value)}
                />
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                  Not assigned
                </Typography>
                <TextField
                  sx={{ width: '70%' }}
                  label="Search"
                  value={searchNotAssignDev}
                  onChange={(e) => setNotSearchAssignDev(e.target.value)}
                />
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableCell
              component="th"
              scope="row"
              sx={{
                borderRight: '1px solid #000',
                borderBottom: 'none',
                verticalAlign: 'baseline',
              }}
            >
              {stateDevArrayAssign
                .filter((d) => d.name.startsWith(capitalize(searchAssignDev)))
                .map((dev) => (
                  <div key={dev.id} style={{ marginBottom: '10px' }}>
                    <TableRow
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '15px 0px',
                      }}
                    >
                      <Avatar
                        src={dev.image}
                        sx={{
                          width: '50px',
                          height: '50px',
                          marginRight: '10px',
                        }}
                      />{' '}
                      <Typography>{dev?.name}</Typography>
                    </TableRow>
                  </div>
                ))}
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              sx={{
                borderRight: '2px solid #000',
                borderBottom: 'none',
                verticalAlign: 'baseline',
              }}
            >
              {stateDevArrayNotAssign
                .filter((d) =>
                  d.name.startsWith(capitalize(searchNotAssignDev))
                )
                .map((dev) => (
                  <div key={dev.id}>
                    <TableRow
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '15px 0px',
                      }}
                    >
                      <Avatar
                        src={dev.image}
                        sx={{
                          width: '50px',
                          height: '50px',
                          marginRight: '10px',
                        }}
                      />{' '}
                      <Typography>{dev?.name}</Typography>
                    </TableRow>
                  </div>
                ))}
            </TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </Modal>
  );
};
export default ModalAssignCreateProject;
