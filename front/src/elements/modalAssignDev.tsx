import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';

export const ContainerTable = styled(TableContainer)(() => ({
  maxWidth: 900,
  width: '100%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: '#fff',
  border: '2px solid #000',
  boxShadow: '24px',
  overflow: 'hidden',
}));

export const TableCellBorderRight = styled(TableCell)(() => ({
  borderRight: '1px solid #000',
}));
export const StyledTableRow = styled(TableRow)(() => ({
  display: 'flex',
  alignItems: 'center',
  padding: '15px 0px',
}));

export const TableCellContainer = styled(TableCell)(() => ({
  borderRight: '1px solid #000',
  borderBottom: 'none',
  verticalAlign: 'baseline',
}));

export const TableCellLine = styled(TableCell)(() => ({
  borderRight: '2px solid #000',
  borderBottom: 'none',
  verticalAlign: 'baseline',
}));

export const StyledTextFiled = styled(TextField)(() => ({
  width: '70%',
  marginTop: '10px',
}));

export const StyledAvatar = styled(Avatar)(() => ({
  width: '50px',
  height: '50px',
  marginRight: '10px',
}));
