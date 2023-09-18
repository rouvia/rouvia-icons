import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/bell_solid.svg';

const BellSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BellSolidIcon };
