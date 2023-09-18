import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/error-octagon.svg';

const ErrorOctagonIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ErrorOctagonIcon };
