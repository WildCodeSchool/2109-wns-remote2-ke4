import BoardRow from './BoardRow';
import { blue, deepPurple } from '@mui/material/colors';
import { Avatar, AvatarProps, Chip, ChipProps, TableBody } from '@mui/material';

function BoardRows() {
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
          sx={{
            bgcolor: blue[500],
            height: '30px',
            width: '30px',
            fontSize: 13,
          }}
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
      'Board page interface',
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
          sx={{
            bgcolor: blue[500],
            height: '30px',
            width: '30px',
            fontSize: 13,
          }}
          alt="Remy Sharp"
        >
          Y
        </Avatar>,
        <Avatar
          src="https://i.pravatar.cc/150?img=3"
          sx={{ height: '30px', width: '30px' }}
        />,
      ],
      '29/08/2022'
    ),
    createData(
      'Inscription module',
      'Ke4 Project',
      <Chip color="secondary" size="small" label="To do" />,
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
          sx={{
            bgcolor: blue[500],
            height: '30px',
            width: '30px',
            fontSize: 13,
          }}
          alt="Remy Sharp"
        >
          Y
        </Avatar>,
        <Avatar
          src="https://i.pravatar.cc/150?img=3"
          sx={{ height: '30px', width: '30px' }}
        />,
      ],
      '30/08/2022'
    ),
  ];

  console.log(rows[0].subject)

  return (
    <TableBody>
      {rows.map((row) => (
        <BoardRow
          subject={row.subject}
          project={row.project}
          status={row.status}
          priority={row.priority}
          assignee={row.assignee}
          dueDate={row.dueDate}
        />
      ))}
    </TableBody>
  );
}

export default BoardRows;
