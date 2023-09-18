import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/sign-out.svg';

const SignOutIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SignOutIcon };
