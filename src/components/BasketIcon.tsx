import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/basket.svg';

const BasketIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BasketIcon };
