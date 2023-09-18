import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/location.svg';

const LocationIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { LocationIcon };
