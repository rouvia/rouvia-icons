import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/users.svg';

const UsersIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { UsersIcon };
