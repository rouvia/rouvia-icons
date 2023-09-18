import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/check-circle_solid.svg';

const CheckCircleSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CheckCircleSolidIcon };
