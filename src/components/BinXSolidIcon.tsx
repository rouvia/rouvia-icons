import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/bin-x_solid.svg';

const BinXSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BinXSolidIcon };
