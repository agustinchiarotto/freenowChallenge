import { Routes, Route } from 'react-router-dom';

import { ErrorPage, NotFound, Home, VehicleDetails, MapView } from '../pages';
import routes from '../constants/routes/routes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.NOT_FOUND} element={<NotFound />} />
      <Route path={routes.ERROR_PAGE} element={<ErrorPage />} />

      <Route path={routes.HOME} element={<Home />} />
      <Route path={`${routes.VEHICLE_DETAILS}/:id`} element={<VehicleDetails />} />
      <Route path={routes.MAP_VIEW} element={<MapView />} />
    </Routes>
  );
};

export default AppRoutes;
