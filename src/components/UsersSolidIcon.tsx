import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/users_solid.svg';

const UsersSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { UsersSolidIcon };
