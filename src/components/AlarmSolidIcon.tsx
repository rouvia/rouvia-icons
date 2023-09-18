import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/alarm_solid.svg';

const AlarmSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { AlarmSolidIcon };
