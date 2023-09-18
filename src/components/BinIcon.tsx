import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/bin.svg';

const BinIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BinIcon };
