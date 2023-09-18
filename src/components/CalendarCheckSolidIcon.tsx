import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/calendar-check_solid.svg';

const CalendarCheckSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CalendarCheckSolidIcon };
