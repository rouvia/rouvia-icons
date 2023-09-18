import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/hover_solid.svg';

const HoverSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { HoverSolidIcon };
