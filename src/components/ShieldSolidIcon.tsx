import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/shield_solid.svg';

const ShieldSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ShieldSolidIcon };
