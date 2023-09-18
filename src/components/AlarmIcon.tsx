import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/alarm.svg';

const AlarmIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { AlarmIcon };
