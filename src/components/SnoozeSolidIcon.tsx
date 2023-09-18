import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/snooze_solid.svg';

const SnoozeSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { SnoozeSolidIcon };
