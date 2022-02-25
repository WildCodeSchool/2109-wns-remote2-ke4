import { Avatar, Chip, Tooltip } from '@mui/material';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CachedIcon from '@mui/icons-material/Cached';
import CheckIcon from '@mui/icons-material/Check';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Order } from '../interfaces/BoardInterfaces';

const getCleanAvatar = (name: string) => {
  const colors = ['#3498db', '#9b59b6', '#f1c40f', '#e67e22', '#1abc9c'];

  return (
    <Tooltip title={name} placement="top" arrow>
      <Avatar
        sx={{
          bgcolor: colors[Math.floor(Math.random() * colors.length)],
          width: '30px',
          height: '30px',
        }}
      >
        {name[0]}
      </Avatar>
    </Tooltip>
  );
};

const getChipPriority = (priority: string) => {
  if (priority === 'Light') {
    return (
      <Chip
        label={priority}
        color="info"
        icon={<AutoAwesomeIcon />}
        size="small"
      />
    );
  } else if (priority === 'Medium') {
    return (
      <Chip
        label={priority}
        color="warning"
        icon={<WarningAmberIcon />}
        size="small"
      />
    );
  } else {
    return (
      <Chip
        label={priority}
        color="error"
        icon={<ErrorOutlineIcon />}
        size="small"
      />
    );
  }
};

const getChipStatus = (status: string) => {
  if (status === 'To do') {
    return (
      <Chip
        label={status}
        color="info"
        icon={<PlaylistAddIcon />}
        size="small"
      />
    );
  } else if (status === 'Doing') {
    return (
      <Chip label={status} color="warning" icon={<CachedIcon />} size="small" />
    );
  } else {
    return (
      <Chip label={status} color="success" icon={<CheckIcon />} size="small" />
    );
  }
};

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: string[] | string },
  b: { [key in Key]: string[] | string }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export {
  getCleanAvatar,
  getChipPriority,
  getChipStatus,
  getComparator,
  descendingComparator,
  stableSort,
};
