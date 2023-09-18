import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/route.svg';

const RouteIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { RouteIcon };
