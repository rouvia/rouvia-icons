import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/circle-arrow-left_solid.svg';

const CircleArrowLeftSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CircleArrowLeftSolidIcon };
