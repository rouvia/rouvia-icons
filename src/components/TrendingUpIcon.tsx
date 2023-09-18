import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/trending-up.svg';

const TrendingUpIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { TrendingUpIcon };
