import Coordinate from './Coordinate';

export default interface FreeNowVehicle {
  id: number;
  coordinate: Coordinate;
  state: 'ACTIVE' | 'INACTIVE';
  type: string;
}
