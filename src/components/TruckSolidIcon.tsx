import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/truck_solid.svg';

const TruckSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { TruckSolidIcon };
