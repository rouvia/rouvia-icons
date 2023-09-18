import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/forward.svg';

const ForwardIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ForwardIcon };
