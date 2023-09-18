import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/moon_solid.svg';

const MoonSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MoonSolidIcon };
