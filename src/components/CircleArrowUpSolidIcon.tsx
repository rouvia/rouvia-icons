import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/circle-arrow-up_solid.svg';

const CircleArrowUpSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CircleArrowUpSolidIcon };
