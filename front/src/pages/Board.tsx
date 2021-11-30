import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BoardRows from '../components/BoardRows';
import { Container } from '@mui/material';
import { StyledTableCell } from '../elements/styledTable';

function Board() {
  return (
    <Container maxWidth="lg">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Ticket subject</StyledTableCell>
              <StyledTableCell>Related project</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Priority</StyledTableCell>
              <StyledTableCell>Assignee</StyledTableCell>
              <StyledTableCell>Due date</StyledTableCell>
            </TableRow>
          </TableHead>
          <BoardRows />
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Board;
