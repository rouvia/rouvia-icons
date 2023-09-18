import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/calendar-x_solid.svg';

const CalendarXSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CalendarXSolidIcon };
