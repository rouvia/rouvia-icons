import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/star-half_solid.svg';

const StarHalfSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { StarHalfSolidIcon };
