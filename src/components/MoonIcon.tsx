import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/moon.svg';

const MoonIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MoonIcon };
