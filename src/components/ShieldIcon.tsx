import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/shield.svg';

const ShieldIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ShieldIcon };
