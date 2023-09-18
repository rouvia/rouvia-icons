import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/trending-down.svg';

const TrendingDownIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { TrendingDownIcon };
