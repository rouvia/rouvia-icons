import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/circle-arrow-left-up.svg';

const CircleArrowLeftUpIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CircleArrowLeftUpIcon };
