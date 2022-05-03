import Coordinate from './Coordinate';

enum quality {
  UNACCEPTABLE = 'UNACCEPTABLE',
  GOOD = 'GOOD',
}

enum engineType {
  CE = 'CE',
}

export default interface ShareNowVehicle {
  address: string;
  coordinates: number[];
  coordinate: Coordinate;
  engineType: engineType;
  exterior: quality;
  fuel: number;
  interior: quality;
  name: string;
  vin: string;
  id: number;
}
