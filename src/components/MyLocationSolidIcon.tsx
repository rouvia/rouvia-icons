import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/my-location_solid.svg';

const MyLocationSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MyLocationSolidIcon };
