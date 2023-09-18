import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/circle-arrow-left.svg';

const CircleArrowLeftIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CircleArrowLeftIcon };
