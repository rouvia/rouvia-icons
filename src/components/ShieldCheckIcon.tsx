import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/shield-check.svg';

const ShieldCheckIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ShieldCheckIcon };
