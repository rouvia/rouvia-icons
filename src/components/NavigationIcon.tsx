import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/navigation.svg';

const NavigationIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { NavigationIcon };
