import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/user-add_solid.svg';

const UserAddSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { UserAddSolidIcon };
