import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/bag.svg';

const BagIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BagIcon };
