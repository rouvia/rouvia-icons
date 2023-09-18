import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/more-vertical.svg';

const MoreVerticalIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MoreVerticalIcon };
