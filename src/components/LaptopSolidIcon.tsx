import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/laptop_solid.svg';

const LaptopSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { LaptopSolidIcon };
