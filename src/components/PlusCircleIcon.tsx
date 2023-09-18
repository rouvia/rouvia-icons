import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/plus-circle.svg';

const PlusCircleIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PlusCircleIcon };
