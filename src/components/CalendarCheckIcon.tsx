import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/calendar-check.svg';

const CalendarCheckIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CalendarCheckIcon };
