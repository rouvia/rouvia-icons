import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/alert.svg';

const AlertIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { AlertIcon };
