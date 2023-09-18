import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/mouse_solid.svg';

const MouseSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MouseSolidIcon };
