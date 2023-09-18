import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/star_solid.svg';

const StarSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { StarSolidIcon };
