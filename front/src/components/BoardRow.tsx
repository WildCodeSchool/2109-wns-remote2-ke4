import { AvatarGroup, AvatarProps, ChipProps } from '@mui/material';
import { StyledTableRow, StyledTableCell } from '../elements/styledTable';

function BoardRow(
  subject: any,
  project: any,
  status: ChipProps,
  priority: ChipProps,
  assignee: AvatarProps[],
  dueDate: any
) {
  return (
    <StyledTableRow key={subject.subject}>
      <StyledTableCell component="th" scope="row">
        {subject.subject}
      </StyledTableCell>
      <StyledTableCell>{subject.project}</StyledTableCell>
      <StyledTableCell>{subject.status}</StyledTableCell>
      <StyledTableCell>{subject.priority}</StyledTableCell>
      <StyledTableCell sx={{ display: 'flex' }} align="center">
        <AvatarGroup>{subject.assignee.map((avatar: AvatarProps) => avatar)}</AvatarGroup>
      </StyledTableCell>
      <StyledTableCell>{subject.dueDate}</StyledTableCell>
    </StyledTableRow>
  );
}

export default BoardRow;
