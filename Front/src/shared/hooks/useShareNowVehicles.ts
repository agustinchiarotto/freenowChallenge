import { useQuery } from 'react-query';
import { API_URL } from '../../config';
import ShareNowVehicle from '../../constants/interfaces/ShareNowVehicle';
import { fecthServer } from '../../services/fetchServer';

const getShareNowVehiclesEndpoint = `${API_URL}/share-now/vehicles`;

const fetchVehicles = async () => fecthServer({ method: 'GET', url: getShareNowVehiclesEndpoint });

export const useShareNowVehicles = () => {
  return useQuery(
    ['search_sharenow_vehicles'],
    async () => {
      const result = await fetchVehicles();
      result?.placemarks?.map((a: ShareNowVehicle) => {
        const coordinate = {
          latitude: a.coordinates[0],
          longitude: a.coordinates[1],
        };
        a.coordinate = coordinate;
      });
      return result?.placemarks?.sort((a: ShareNowVehicle, b: ShareNowVehicle) => {
        return a.name.localeCompare(b.name);
      });
    },
    {
      keepPreviousData: true,
      enabled: true,
    },
  );
};
