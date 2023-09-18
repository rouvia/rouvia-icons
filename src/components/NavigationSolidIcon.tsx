import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/navigation_solid.svg';

const NavigationSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { NavigationSolidIcon };
