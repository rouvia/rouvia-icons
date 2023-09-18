import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/chart.svg';

const ChartIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ChartIcon };
