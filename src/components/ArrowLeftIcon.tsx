import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/arrow-left.svg';

const ArrowLeftIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ArrowLeftIcon };
