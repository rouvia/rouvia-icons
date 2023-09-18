import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/stop.svg';

const StopIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { StopIcon };
