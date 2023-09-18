import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/bell-off_solid.svg';

const BellOffSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { BellOffSolidIcon };
