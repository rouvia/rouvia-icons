import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/hover.svg';

const HoverIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { HoverIcon };
