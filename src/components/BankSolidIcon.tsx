import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/bank_solid.svg';

const BankSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BankSolidIcon };
