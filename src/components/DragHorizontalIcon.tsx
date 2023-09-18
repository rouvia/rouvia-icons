import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/drag-horizontal.svg';

const DragHorizontalIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { DragHorizontalIcon };
