import { useParams } from 'react-router-dom';
import { Card, GoBackArrow, Map } from '../../components';
import { useFreeNowVehicles } from '../../shared/hooks/useFreeNowVehicles';
import { useShareNowVehicles } from '../../shared/hooks/useShareNowVehicles';
import ErrorPage from '../error/ErrorPage';
import FreeNowVehicle from '../../constants/interfaces/FreeNowVehicle';
import ShareNowVehicle from '../../constants/interfaces/ShareNowVehicle';
import { Marker, Popup } from 'react-leaflet';
import { getFreeIcon } from '../../utils/getMapIcon';

const VehicleDetails = () => {
  let { id } = useParams();

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

  if (isErrorFreeNow || isErrorShareNow) {
    return <ErrorPage />;
  }

  if (isLoadingFreeNow || isLoadingShareNow) {
    return <h1> Loading...</h1>;
  }

  const vehicle =
    freeNowData.find((item: FreeNowVehicle) => `${item.id}` === id) ||
    shareNowData.find((item: ShareNowVehicle) => `${item.id}` === id);

  console.log('ID:', id);
  console.log('vehicle', vehicle);

  return (
    <div className="mx-24">
      <GoBackArrow />
      <h1 className="border-b-2 border-b-white py-4">Vehicle Details</h1>
      <h4 className="text-xl mt-8 mb-4">Real time map location</h4>
      <Map
        center={[vehicle?.coordinate?.latitude, vehicle.coordinate.longitude]}
        classNames="leaflet-container-details"
      >
        <>
          <Marker
            key={vehicle.id}
            position={[vehicle.coordinate.latitude, vehicle.coordinate.longitude]}
            icon={getFreeIcon(32)}
          />
        </>
      </Map>

      <div className="my-16 flex flex-wrap justify-evenly">
        <Card title={'ID'} text={vehicle.id} />

        {vehicle.name && <Card title={'NAME'} text={vehicle.name} />}
        {vehicle.fuel && <Card title={'FUEL'} text={`${vehicle.fuel}%`} />}
        {vehicle.engineType && <Card title={'ENGINE TYPE'} text={vehicle.engineType} />}
        {vehicle.address && <Card title={'ADDRESS'} text={vehicle.address} />}
        {vehicle.state && <Card title={'STATE'} text={vehicle.state} />}
        {vehicle.state && <Card title={'TYPE'} text={vehicle.type} />}
      </div>
    </div>
  );
};

export default VehicleDetails;
