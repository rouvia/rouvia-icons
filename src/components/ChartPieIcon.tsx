import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/chart-pie.svg';

const ChartPieIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ChartPieIcon };
