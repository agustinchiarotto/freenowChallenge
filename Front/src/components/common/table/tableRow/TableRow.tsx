const isEven = (number: number) => {
  return number % 2 != 0;
};

const TableRow = ({
  rowId,
  rowIndex,
  onClickRow,
  children,
}: {
  rowId: number;
  rowIndex: number;
  onClickRow: (id: number) => void;
  children: React.ReactNode;
}) => {
  return (
    <tr
      className={`${isEven(rowIndex) ? 'bg-freenowBlue-600' : ''} h-16`}
      key={rowId}
      onClick={() => onClickRow(rowId)}
      data-testid="tableRowContainer"
    >
      {children}
    </tr>
  );
};

export default TableRow;
