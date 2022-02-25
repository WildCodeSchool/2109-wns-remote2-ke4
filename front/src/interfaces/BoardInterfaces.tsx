interface Data {
  ticketSubject: string;
  relatedProject: string;
  status: string;
  priority: string;
  assignee: Array<string>;
  dueDate: string;
}

interface HeadTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

interface HeadCell {
  id: keyof Data;
  label: string;
}

type Order = 'asc' | 'desc';

export type { Data, HeadTableProps, HeadCell, Order };
