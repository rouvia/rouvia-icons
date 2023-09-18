import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/circle-arrow-down_solid.svg';

const CircleArrowDownSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CircleArrowDownSolidIcon };
