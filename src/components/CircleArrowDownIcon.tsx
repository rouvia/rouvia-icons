import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/circle-arrow-down.svg';

const CircleArrowDownIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CircleArrowDownIcon };
