import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/map_solid.svg';

const MapSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MapSolidIcon };
