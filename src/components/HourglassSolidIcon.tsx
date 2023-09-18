import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/hourglass_solid.svg';

const HourglassSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { HourglassSolidIcon };
