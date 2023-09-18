import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/cart.svg';

const CartIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CartIcon };
