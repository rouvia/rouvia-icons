import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/lock-open.svg';

const LockOpenIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { LockOpenIcon };
