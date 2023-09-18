import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/cash_solid.svg';

const CashSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CashSolidIcon };
