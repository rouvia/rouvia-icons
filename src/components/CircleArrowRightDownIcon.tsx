import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/circle-arrow-right-down.svg';

const CircleArrowRightDownIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CircleArrowRightDownIcon };
