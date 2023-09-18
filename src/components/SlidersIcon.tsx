import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/sliders.svg';

const SlidersIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SlidersIcon };
