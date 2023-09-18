import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/block.svg';

const BlockIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BlockIcon };
