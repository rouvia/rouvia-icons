import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/sliders-alt.svg';

const SlidersAltIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SlidersAltIcon };
