import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/arrow-right.svg';

const ArrowRightIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ArrowRightIcon };
