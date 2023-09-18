import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/pencil_solid.svg';

const PencilSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PencilSolidIcon };
