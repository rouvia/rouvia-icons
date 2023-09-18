import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/check-small.svg';

const CheckSmallIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CheckSmallIcon };
