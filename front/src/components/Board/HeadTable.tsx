import * as React from 'react';
import Box from '@mui/material/Box';
import TableHead from '@mui/material/TableHead';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import {
  Data,
  HeadTableProps,
  HeadCell,
} from '../../interfaces/BoardInterfaces';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const headCells: readonly HeadCell[] = [
  {
    id: 'ticketSubject',
    label: 'Ticket Subject',
  },
  {
    id: 'relatedProject',
    label: 'Related Projet',
  },
  {
    id: 'status',
    label: 'Status',
  },
  {
    id: 'priority',
    label: 'Priority',
  },
  {
    id: 'assignee',
    label: 'Assignee',
  },
  {
    id: 'dueDate',
    label: 'Due Date',
  },
];

const HeadTable = (props: HeadTableProps) => {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead sx={{ backgroundColor: '#ecf0f1' }}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding="normal"
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ color: '#000000' }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default HeadTable;
