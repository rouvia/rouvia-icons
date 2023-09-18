import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/circle-arrow-right.svg';

const CircleArrowRightIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CircleArrowRightIcon };
