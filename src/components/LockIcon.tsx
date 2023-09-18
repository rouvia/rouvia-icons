import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/lock.svg';

const LockIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { LockIcon };
