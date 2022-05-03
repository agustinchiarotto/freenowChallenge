import { useQuery } from 'react-query';
import { fecthServer } from '../../services/fetchServer';
import { API_URL } from '../../config';

const getFreeNowVehiclesEndpoint = `${API_URL}/free-now/vehicles`;

const fetchVehicles = async () => fecthServer({ method: 'GET', url: getFreeNowVehiclesEndpoint });

export const useFreeNowVehicles = () => {
  return useQuery(
    ['search_freenow_vehicles'],
    async () => {
      const result = await fetchVehicles();
      return result.poiList;
    },
    {
      keepPreviousData: true,
      enabled: true,
    },
  );
};
