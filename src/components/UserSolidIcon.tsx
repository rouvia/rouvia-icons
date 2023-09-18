import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/user_solid.svg';

const UserSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { UserSolidIcon };
