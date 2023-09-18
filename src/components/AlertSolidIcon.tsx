import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/alert_solid.svg';

const AlertSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { AlertSolidIcon };
