import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BoardRows from '../components/Board/BoardRows';
import { Container } from '@mui/material';
import { StyledTableCell } from '../elements/styledTable.styles';
import { SortTableStyled } from '../elements/styledTable.styles';

const cellLabels = [
  'Ticket subject',
  'Related project',
  'Status',
  'Priority',
  'Assignee',
  'Due date',
];

function Board() {
  return (
    <Container maxWidth="lg">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {cellLabels.map((cell) => {
                return (
                  <StyledTableCell>
                    <SortTableStyled>{cell}</SortTableStyled>
                  </StyledTableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <BoardRows />
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Board;
