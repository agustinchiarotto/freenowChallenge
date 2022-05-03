import { Marker, Popup } from 'react-leaflet';
import { GoBackArrow, Map } from '../../components';
import { useFreeNowVehicles } from '../../shared/hooks/useFreeNowVehicles';
import { useShareNowVehicles } from '../../shared/hooks/useShareNowVehicles';
import ErrorPage from '../error/ErrorPage';
import FreeNowVehicle from '../../constants/interfaces/FreeNowVehicle';
import ShareNowVehicle from '../../constants/interfaces/ShareNowVehicle';
import { getFreeIcon, getShareIcon } from '../../utils/getMapIcon';

const MapView = () => {
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
    return <h1>Loading...</h1>;
  }

  let centerLatitudeFree = freeNowData
    .map((item: FreeNowVehicle) => item.coordinate.latitude)
    .reduce((prev: number, next: number) => prev + next);

  let centerLongitudeFree = freeNowData
    .map((item: FreeNowVehicle) => item.coordinate.longitude)
    .reduce((prev: number, next: number) => prev + next);

  centerLatitudeFree = centerLatitudeFree / freeNowData.length;
  centerLongitudeFree = centerLongitudeFree / freeNowData.length;

  return (
    <>
      <div className="mb-4">
        <GoBackArrow />
      </div>
      <Map center={[centerLatitudeFree, centerLongitudeFree]}>
        <>
          {freeNowData.map((item: FreeNowVehicle) => {
            return (
              <Marker
                key={item.id}
                position={[item.coordinate.latitude, item.coordinate.longitude]}
                icon={getFreeIcon(32)}
              >
                <Popup>
                  {`Id: ${item.id} // 
                    state: ${item.state} // 
                    type: ${item.type}
              `}
                </Popup>
              </Marker>
            );
          })}

          {shareNowData.map((item: ShareNowVehicle) => {
            return (
              <Marker
                key={item.id}
                position={[item.coordinate.latitude, item.coordinate.longitude]}
                icon={getShareIcon(32)}
              >
                <Popup>
                  {`Id: ${item.id} // 
                    name: ${item.name} // 
                    fuel: ${item.fuel}
              `}
                </Popup>
              </Marker>
            );
          })}
        </>
      </Map>
    </>
  );
};

export default MapView;
