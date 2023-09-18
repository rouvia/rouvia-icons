import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/lock_solid.svg';

const LockSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { LockSolidIcon };
