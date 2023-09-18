import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/minus-circle_solid.svg';

const MinusCircleSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MinusCircleSolidIcon };
