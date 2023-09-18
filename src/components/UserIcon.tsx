import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/user.svg';

const UserIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { UserIcon };
