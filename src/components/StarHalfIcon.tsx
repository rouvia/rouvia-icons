import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/star-half.svg';

const StarHalfIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { StarHalfIcon };
