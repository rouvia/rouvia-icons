import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/fast-backward.svg';

const FastBackwardIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { FastBackwardIcon };
