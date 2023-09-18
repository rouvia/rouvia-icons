import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/alert-triangle_solid.svg';

const AlertTriangleSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { AlertTriangleSolidIcon };
