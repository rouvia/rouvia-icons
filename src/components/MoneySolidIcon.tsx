import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/money_solid.svg';

const MoneySolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MoneySolidIcon };
