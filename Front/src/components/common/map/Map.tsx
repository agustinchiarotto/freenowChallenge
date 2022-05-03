import { ReactChild } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';

const Map = ({
  center,
  children,
  classNames = '',
}: {
  center: LatLngExpression;
  children: ReactChild;
  classNames?: string;
}) => {
  return (
    <div data-testid="mapContainer">
      <MapContainer center={center} zoom={13} scrollWheelZoom={false} className={classNames}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {children}
      </MapContainer>
    </div>
  );
};

export default Map;
