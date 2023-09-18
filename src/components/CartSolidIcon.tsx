import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/cart_solid.svg';

const CartSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CartSolidIcon };
