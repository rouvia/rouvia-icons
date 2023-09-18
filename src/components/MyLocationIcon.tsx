import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/my-location.svg';

const MyLocationIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MyLocationIcon };
