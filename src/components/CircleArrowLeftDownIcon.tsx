import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/circle-arrow-left-down.svg';

const CircleArrowLeftDownIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CircleArrowLeftDownIcon };
