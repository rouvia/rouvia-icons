import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/arrow-right-down.svg';

const ArrowRightDownIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ArrowRightDownIcon };
