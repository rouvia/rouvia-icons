import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/sun.svg';

const SunIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SunIcon };
