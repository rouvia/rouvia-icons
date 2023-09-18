import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/chart-pie_solid.svg';

const ChartPieSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ChartPieSolidIcon };
