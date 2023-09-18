import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/discount.svg';

const DiscountIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { DiscountIcon };
