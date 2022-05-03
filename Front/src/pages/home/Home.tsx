import { useState } from 'react';
import { Button, FreeNowTableBody, ShareNowTableBody, Table } from '../../components';
import { useFreeNowVehicles } from '../../shared/hooks/useFreeNowVehicles';
import { useShareNowVehicles } from '../../shared/hooks/useShareNowVehicles';
import ErrorPage from '../error/ErrorPage';
import routes from '../../constants/routes/routes';
import { useNavigate } from 'react-router-dom';

const shareNowTableHeaders = ['ID', 'Name', 'VIN', 'Fuel', 'Exterior', 'Interior', 'Engine Type'];
const freeNowTableHeaders = ['ID', 'State', 'Type'];

const Home = () => {
  const [showFreeNow, setShowFreeNow] = useState<boolean>(false);

  const {
    data: freeNowData,
    isLoading: isLoadingFreeNow,
    isError: isErrorFreeNow,
  } = useFreeNowVehicles();
  const {
    data: shareNowData,
    isLoading: isLoadingShareNow,
    isError: isErrorShareNow,
  } = useShareNowVehicles();

  const navigate = useNavigate();

  const onClickRow = (id: number) => navigate(`${routes.VEHICLE_DETAILS}/${id}`);

  const onClickViewMap = () => navigate(routes.MAP_VIEW);

  if (isErrorFreeNow || isErrorShareNow) {
    return <ErrorPage />;
  }

  if (isLoadingFreeNow || isLoadingShareNow) {
    return <h1> Loading...</h1>;
  }

  return (
    <div className="mx-24 my-20">
      <h1>Vehicles Information</h1>
      <div className="flex justify-between mt-8 mb-4">
        <Button onClick={onClickViewMap} label={'Map View'} />

        <div className="flex">
          <h3
            className={`mr-8 cursor-pointer ${
              showFreeNow ? '' : ' border-b-2 border-freenowRed-700'
            }`}
            onClick={() => setShowFreeNow(false)}
          >
            ShareNow
          </h3>
          <h3
            className={`cursor-pointer ${showFreeNow ? 'border-b-2 border-freenowRed-700' : ''}`}
            onClick={() => setShowFreeNow(true)}
          >
            FreeNow
          </h3>
        </div>
      </div>
      <Table headers={showFreeNow ? freeNowTableHeaders : shareNowTableHeaders}>
        {showFreeNow ? (
          <FreeNowTableBody tbodyData={freeNowData} onClickRow={onClickRow} />
        ) : (
          <ShareNowTableBody tbodyData={shareNowData} onClickRow={onClickRow} />
        )}
      </Table>
    </div>
  );
};

export default Home;
