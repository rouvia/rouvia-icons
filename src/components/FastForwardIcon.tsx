import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/fast-forward.svg';

const FastForwardIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { FastForwardIcon };
