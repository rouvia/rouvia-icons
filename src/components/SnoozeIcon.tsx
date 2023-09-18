import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/snooze.svg';

const SnoozeIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SnoozeIcon };
