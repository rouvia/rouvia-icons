import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/bell.svg';

const BellIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BellIcon };
