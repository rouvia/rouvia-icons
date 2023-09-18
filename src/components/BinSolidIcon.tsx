import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/bin_solid.svg';

const BinSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BinSolidIcon };
