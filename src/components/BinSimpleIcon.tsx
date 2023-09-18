import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/bin-simple.svg';

const BinSimpleIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BinSimpleIcon };
