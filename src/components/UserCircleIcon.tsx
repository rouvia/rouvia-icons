import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/user-circle.svg';

const UserCircleIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { UserCircleIcon };
