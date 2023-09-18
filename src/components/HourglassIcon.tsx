import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/hourglass.svg';

const HourglassIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { HourglassIcon };
