import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/shield-check_solid.svg';

const ShieldCheckSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ShieldCheckSolidIcon };
