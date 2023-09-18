import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/calendar.svg';

const CalendarIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CalendarIcon };
