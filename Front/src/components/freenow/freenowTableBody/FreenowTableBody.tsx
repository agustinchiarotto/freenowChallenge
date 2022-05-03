import FreeNowVehicle from '../../../constants/interfaces/FreeNowVehicle';
import TableRow from '../../common/table/tableRow/TableRow';

const FreeNowTableBody = ({
  tbodyData,
  onClickRow,
}: {
  tbodyData: FreeNowVehicle[];
  onClickRow: (id: number) => void;
}) => {
  return (
    <tbody data-testid="freenowTableContainer">
      {tbodyData.map((item: FreeNowVehicle, index) => {
        return (
          <TableRow onClickRow={onClickRow} rowId={item.id} key={item.id} rowIndex={index}>
            <td>{item.id}</td>
            <td>{item.state}</td>
            <td>{item.type}</td>
          </TableRow>
        );
      })}
    </tbody>
  );
};

export default FreeNowTableBody;
