import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/check-circle.svg';

const CheckCircleIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CheckCircleIcon };
