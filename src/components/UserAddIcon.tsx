import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/user-add.svg';

const UserAddIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { UserAddIcon };
