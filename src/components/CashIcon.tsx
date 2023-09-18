import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/cash.svg';

const CashIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CashIcon };
