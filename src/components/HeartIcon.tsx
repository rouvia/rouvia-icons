import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/heart.svg';

const HeartIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { HeartIcon };
