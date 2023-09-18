import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/map-pin.svg';

const MapPinIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MapPinIcon };
