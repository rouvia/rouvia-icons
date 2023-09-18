import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/arrow-right-up.svg';

const ArrowRightUpIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ArrowRightUpIcon };
