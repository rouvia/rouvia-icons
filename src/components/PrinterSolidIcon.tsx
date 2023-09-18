import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/printer_solid.svg';

const PrinterSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PrinterSolidIcon };
