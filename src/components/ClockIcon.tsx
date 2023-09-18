import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/clock.svg';

const ClockIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { ClockIcon };
