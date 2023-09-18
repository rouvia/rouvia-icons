import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/alert-triangle.svg';

const AlertTriangleIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { AlertTriangleIcon };
