import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/user-circle_solid.svg';

const UserCircleSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { UserCircleSolidIcon };
