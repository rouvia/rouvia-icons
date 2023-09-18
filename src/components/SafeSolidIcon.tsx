import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/safe_solid.svg';

const SafeSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SafeSolidIcon };
