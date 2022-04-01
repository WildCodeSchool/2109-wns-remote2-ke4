import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import {
  getChipPriority,
  getChipStatus,
  getCleanAvatar,
} from '../functions/boardFunctions';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { AvatarGroup, Chip } from '@mui/material';
import { Data, Order } from '../interfaces/BoardInterfaces';
import HeadTable from '../components/Board/HeadTable';
import { getComparator, stableSort } from '../functions/boardFunctions';
import { boardRowsList } from '../mock/boardRows.mock';

function createData(
  ticketSubject: string,
  relatedProject: string,
  status: string,
  priority: string,
  assignee: Array<string>,
  dueDate: string
): Data {
  return {
    ticketSubject,
    relatedProject,
    status,
    priority,
    assignee,
    dueDate,
  };
}

const rows = boardRowsList.map((row) =>
  createData(
    row.subject,
    row.project,
    row.status,
    row.priority,
    row.assignee,
    row.dueDate
  )
);

const Board = () => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('dueDate');

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <Container maxWidth="lg">
      <Paper>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <HeadTable
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy)).map(
                (row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover tabIndex={-1} key={row.ticketSubject}>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        align="center"
                      >
                        {row.ticketSubject}
                      </TableCell>
                      <TableCell align="center">{row.relatedProject}</TableCell>
                      <TableCell align="center">
                        {getChipStatus(row.status)}
                      </TableCell>
                      <TableCell align="center">
                        {getChipPriority(row.priority)}
                      </TableCell>
                      <TableCell align="center">
                        <AvatarGroup max={4}>
                          {row.assignee.map((avatar: string) =>
                            getCleanAvatar(avatar)
                          )}
                        </AvatarGroup>
                      </TableCell>
                      <TableCell align="center">
                        <Chip
                          label={row.dueDate}
                          size="small"
                          icon={<AccessTimeIcon />}
                        />
                      </TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default Board;
