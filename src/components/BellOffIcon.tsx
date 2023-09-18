import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/bell-off.svg';

const BellOffIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BellOffIcon };
