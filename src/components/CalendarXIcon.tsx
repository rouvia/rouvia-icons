import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/calendar-x.svg';

const CalendarXIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CalendarXIcon };
