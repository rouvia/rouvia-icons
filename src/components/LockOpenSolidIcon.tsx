import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/lock-open_solid.svg';

const LockOpenSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { LockOpenSolidIcon };
