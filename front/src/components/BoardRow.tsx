import { AvatarGroup, Chip } from '@mui/material';
import { StyledTableRow, StyledTableCell } from '../elements/styledTable.styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {
  getChipPriority,
  getChipStatus,
  getCleanAvatar,
} from '../functions/boardFunctions';

interface Row {
  subject: string;
  project: string;
  status: string;
  priority: string;
  assignee: string[];
  dueDate: string;
}

function BoardRow(row: Row) {
  return (
    <StyledTableRow key={row.subject}>
      <StyledTableCell component="th" scope="row">
        {row.subject}
      </StyledTableCell>
      <StyledTableCell>{row.project}</StyledTableCell>
      <StyledTableCell>{getChipStatus(row.status)}</StyledTableCell>
      <StyledTableCell>{getChipPriority(row.priority)}</StyledTableCell>
      <StyledTableCell sx={{ display: 'flex' }} align="center">
        <AvatarGroup max={4}>
          {row.assignee.map((avatar: string) => getCleanAvatar(avatar))}
        </AvatarGroup>
      </StyledTableCell>
      <StyledTableCell>
        <Chip label={row.dueDate} size="small" icon={<AccessTimeIcon />} />
      </StyledTableCell>
    </StyledTableRow>
  );
}

export default BoardRow;
