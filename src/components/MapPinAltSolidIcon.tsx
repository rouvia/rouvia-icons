import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/map-pin-alt_solid.svg';

const MapPinAltSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MapPinAltSolidIcon };
