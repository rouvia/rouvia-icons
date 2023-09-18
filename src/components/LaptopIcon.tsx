import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/laptop.svg';

const LaptopIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { LaptopIcon };
