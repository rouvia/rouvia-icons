import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/gift_solid.svg';

const GiftSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { GiftSolidIcon };
