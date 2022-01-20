import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import { capitalize } from '../../libs/utils';
import {
  devArrayAssign,
  devArrayNotAssign,
} from '../../mock/devCreateProject.mock';
import {
  ContainerTable,
  StyledAvatar,
  StyledTableRow,
  StyledTextFiled,
  TableCellBorderRight,
  TableCellContainer,
  TableCellLine,
} from '../../elements/modalAssignDev';

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
      <ContainerTable data-testid="table-modal">
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCellBorderRight align="center">
                <Typography variant="h6">Assigned</Typography>
                <StyledTextFiled
                  label="Search"
                  value={searchAssignDev}
                  onChange={(e) => setSearchAssignDev(e.target.value)}
                />
              </TableCellBorderRight>
              <TableCell align="center">
                <Typography variant="h6">Not assigned</Typography>
                <StyledTextFiled
                  label="Search"
                  value={searchNotAssignDev}
                  onChange={(e) => setNotSearchAssignDev(e.target.value)}
                />
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableCellContainer component="th" scope="row">
              {stateDevArrayAssign
                .filter((d) => d.name.startsWith(capitalize(searchAssignDev)))
                .map((dev) => (
                  <div key={dev.id}>
                    <StyledTableRow>
                      <StyledAvatar src={dev.image} />
                      <Typography>{dev?.name}</Typography>
                    </StyledTableRow>
                  </div>
                ))}
            </TableCellContainer>
            <TableCellLine component="th" scope="row">
              {stateDevArrayNotAssign
                .filter((d) =>
                  d.name.startsWith(capitalize(searchNotAssignDev))
                )
                .map((dev) => (
                  <div key={dev.id}>
                    <StyledTableRow>
                      <StyledAvatar src={dev.image} />
                      <Typography>{dev?.name}</Typography>
                    </StyledTableRow>
                  </div>
                ))}
            </TableCellLine>
          </TableBody>
        </Table>
      </ContainerTable>
    </Modal>
  );
};
export default ModalAssignCreateProject;
