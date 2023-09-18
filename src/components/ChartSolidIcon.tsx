import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/chart_solid.svg';

const ChartSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ChartSolidIcon };
