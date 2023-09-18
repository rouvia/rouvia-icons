import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/printer.svg';

const PrinterIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PrinterIcon };
