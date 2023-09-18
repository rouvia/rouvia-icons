import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/more-horizontal.svg';

const MoreHorizontalIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MoreHorizontalIcon };
