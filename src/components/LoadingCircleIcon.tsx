import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/Loading circle.svg';

const LoadingCircleIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { LoadingCircleIcon };
