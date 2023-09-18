import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/money.svg';

const MoneyIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { MoneyIcon };
