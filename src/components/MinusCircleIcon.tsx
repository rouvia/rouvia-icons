import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/minus-circle.svg';

const MinusCircleIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MinusCircleIcon };
