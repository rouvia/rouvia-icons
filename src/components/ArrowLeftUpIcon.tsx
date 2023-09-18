import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/arrow-left-up.svg';

const ArrowLeftUpIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ArrowLeftUpIcon };
