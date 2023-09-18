import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/arrow-up.svg';

const ArrowUpIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ArrowUpIcon };
