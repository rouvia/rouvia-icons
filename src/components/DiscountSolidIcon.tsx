import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/discount_solid.svg';

const DiscountSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { DiscountSolidIcon };
