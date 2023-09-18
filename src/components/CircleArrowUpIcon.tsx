import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/circle-arrow-up.svg';

const CircleArrowUpIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CircleArrowUpIcon };
