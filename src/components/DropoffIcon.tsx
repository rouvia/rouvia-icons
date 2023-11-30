import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/Dropoff.svg';

const DropoffIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { DropoffIcon };
