import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/map-pin-alt.svg';

const MapPinAltIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MapPinAltIcon };
