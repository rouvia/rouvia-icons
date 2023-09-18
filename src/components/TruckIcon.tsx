import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/truck.svg';

const TruckIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { TruckIcon };
