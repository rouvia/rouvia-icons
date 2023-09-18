import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/star.svg';

const StarIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { StarIcon };
