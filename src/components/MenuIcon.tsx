import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/menu.svg';

const MenuIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MenuIcon };
