import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/bin-simple_solid.svg';

const BinSimpleSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BinSimpleSolidIcon };
