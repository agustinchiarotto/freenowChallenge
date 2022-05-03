import L from 'leaflet';

export const getFreeIcon = (_iconSize: any) => {
  return L.icon({
    iconUrl: require('../assets/images/icons/freenow_blue.png'),
    iconSize: _iconSize,
  });
};

export const getShareIcon = (_iconSize: any) => {
  return L.icon({
    iconUrl: require('../assets/images/icons/sharenow_blue.png'),
    iconSize: _iconSize,
  });
};
