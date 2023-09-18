import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/plus-circle_solid.svg';

const PlusCircleSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PlusCircleSolidIcon };
