import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/drag-vertical.svg';

const DragVerticalIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { DragVerticalIcon };
