import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/heart_solid.svg';

const HeartSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { HeartSolidIcon };
