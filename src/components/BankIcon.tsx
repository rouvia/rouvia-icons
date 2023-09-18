import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/bank.svg';

const BankIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BankIcon };
