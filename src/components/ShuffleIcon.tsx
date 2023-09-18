import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/shuffle.svg';

const ShuffleIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ShuffleIcon };
