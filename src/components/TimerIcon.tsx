import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/timer.svg';

const TimerIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { TimerIcon };
