import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/circle-arrow-right_solid.svg';

const CircleArrowRightSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CircleArrowRightSolidIcon };
