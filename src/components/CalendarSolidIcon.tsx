import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/calendar_solid.svg';

const CalendarSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CalendarSolidIcon };
