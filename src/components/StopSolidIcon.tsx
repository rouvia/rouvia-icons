import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/stop_solid.svg';

const StopSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { StopSolidIcon };
