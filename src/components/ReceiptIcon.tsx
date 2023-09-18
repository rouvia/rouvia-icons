import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/receipt.svg';

const ReceiptIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ReceiptIcon };
