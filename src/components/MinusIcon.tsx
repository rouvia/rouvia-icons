import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/minus.svg';

const MinusIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MinusIcon };
