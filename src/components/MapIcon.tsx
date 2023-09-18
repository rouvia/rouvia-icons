import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/map.svg';

const MapIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MapIcon };
