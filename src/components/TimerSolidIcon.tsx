import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/timer_solid.svg';

const TimerSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { TimerSolidIcon };
