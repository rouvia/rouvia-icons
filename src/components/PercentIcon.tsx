import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/percent.svg';

const PercentIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PercentIcon };
