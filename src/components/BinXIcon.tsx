import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/bin-x.svg';

const BinXIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BinXIcon };
