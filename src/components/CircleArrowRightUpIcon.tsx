import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/circle-arrow-right-up.svg';

const CircleArrowRightUpIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CircleArrowRightUpIcon };
