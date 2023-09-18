import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/location_solid.svg';

const LocationSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { LocationSolidIcon };
