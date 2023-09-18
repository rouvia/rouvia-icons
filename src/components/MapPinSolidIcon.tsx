import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/map-pin_solid.svg';

const MapPinSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MapPinSolidIcon };
