import BoardRow from './BoardRow';
import { TableBody } from '@mui/material';
import { boardRowsList } from '../../mock/boardRows.mock';

function BoardRows() {
  return (
    <TableBody>
      {boardRowsList.map((row) => (
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
