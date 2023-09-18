import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/sun_solid.svg';

const SunSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SunSolidIcon };
