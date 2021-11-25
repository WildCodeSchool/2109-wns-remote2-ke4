import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  Avatar,
  AvatarGroup,
  AvatarProps,
  Chip,
  ChipProps,
  Container,
} from '@mui/material';
import { blue, deepPurple } from '@mui/material/colors';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  subject: string,
  project: string,
  status: ChipProps,
  priority: ChipProps,
  assignee: AvatarProps[],
  dueDate: string
) {
  return { subject, project, status, priority, assignee, dueDate };
}

const rows = [
  createData(
    'Login page interface',
    'Ke4 Project',
    <Chip color="success" size="small" label="Done" />,
    <Chip color="warning" size="small" label="Medium" />,
    [
      <Avatar
        sx={{
          bgcolor: deepPurple[500],
          height: '30px',
          width: '30px',
          fontSize: 13,
        }}
        alt="Remy Sharp"
      >
        PH
      </Avatar>,
      <Avatar
        src="https://i.pravatar.cc/"
        sx={{ height: '30px', width: '30px' }}
      />,
      <Avatar
        sx={{ bgcolor: blue[500], height: '30px', width: '30px', fontSize: 13 }}
        alt="Remy Sharp"
      >
        Y
      </Avatar>,
      <Avatar
        src="https://i.pravatar.cc/150?img=3"
        sx={{ height: '30px', width: '30px' }}
      />,
    ],
    '27/08/2022'
  ),
  createData(
    'Login page interface',
    'Ke4 Project',
    <Chip color="info" size="small" label="In progress" />,
    <Chip color="error" size="small" label="High" />,
    [
      <Avatar
        sx={{
          bgcolor: deepPurple[500],
          height: '30px',
          width: '30px',
          fontSize: 13,
        }}
        alt="Remy Sharp"
      >
        PH
      </Avatar>,
      <Avatar
        src="https://i.pravatar.cc/"
        sx={{ height: '30px', width: '30px' }}
      />,
      <Avatar
        sx={{ bgcolor: blue[500], height: '30px', width: '30px', fontSize: 13 }}
        alt="Remy Sharp"
      >
        Y
      </Avatar>,
      <Avatar
        src="https://i.pravatar.cc/150?img=3"
        sx={{ height: '30px', width: '30px' }}
      />,
    ],
    '27/08/2022'
  ),
];

function Board() {
  return (
    <Container maxWidth="lg">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Ticket subject</StyledTableCell>
              <StyledTableCell align="center">Related project</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Priority</StyledTableCell>
              <StyledTableCell align="center">Assignee</StyledTableCell>
              <StyledTableCell align="center">Due date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.subject}>
                <StyledTableCell component="th" scope="row">
                  {row.subject}
                </StyledTableCell>
                <StyledTableCell>{row.project}</StyledTableCell>
                <StyledTableCell>{row.status}</StyledTableCell>
                <StyledTableCell>{row.priority}</StyledTableCell>
                <StyledTableCell sx={{ display: 'flex' }} align="center">
                  <AvatarGroup>
                    {row.assignee.map((avatar) => avatar)}
                  </AvatarGroup>
                </StyledTableCell>
                <StyledTableCell>{row.dueDate}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Board;
