import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/clock_solid.svg';

const ClockSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ClockSolidIcon };
