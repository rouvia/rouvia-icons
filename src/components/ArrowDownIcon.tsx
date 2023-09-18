import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/arrow-down.svg';

const ArrowDownIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ArrowDownIcon };
