import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/sliders_solid.svg';

const SlidersSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SlidersSolidIcon };
