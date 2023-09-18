import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/route_solid.svg';

const RouteSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { RouteSolidIcon };
