import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/mouse.svg';

const MouseIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MouseIcon };
