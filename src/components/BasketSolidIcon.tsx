import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/basket_solid.svg';

const BasketSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BasketSolidIcon };
