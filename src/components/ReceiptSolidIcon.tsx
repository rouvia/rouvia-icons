import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/receipt_solid.svg';

const ReceiptSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ReceiptSolidIcon };
