import ShareNowVehicle from '../../../constants/interfaces/ShareNowVehicle';
import TableRow from '../../common/table/tableRow/TableRow';
import { CheckIcon, XIcon } from '@heroicons/react/solid';

const getQualityIcon = (value: string) => {
  return value === 'GOOD' ? (
    <CheckIcon className="w-6 h-6 text-freenowGreen-700" />
  ) : (
    <XIcon className="w-6 h-6 text-freenowRed-700" />
  );
};

const ShareNowTableBody = ({
  tbodyData,
  onClickRow,
}: {
  tbodyData: ShareNowVehicle[];
  onClickRow: (id: number) => void;
}) => {
  return (
    <tbody data-testid="sharenowTableContainer">
      {tbodyData.map((item: ShareNowVehicle, index) => {
        return (
          <TableRow onClickRow={onClickRow} rowId={item.id} key={item.id} rowIndex={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.vin}</td>
            <td>{item.fuel}</td>
            <td>{getQualityIcon(item.exterior)}</td>
            <td>{getQualityIcon(item.interior)}</td>
            <td>{item.engineType}</td>
          </TableRow>
        );
      })}
    </tbody>
  );
};

export default ShareNowTableBody;
