import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/error-octagon_solid.svg';

const ErrorOctagonSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ErrorOctagonSolidIcon };
