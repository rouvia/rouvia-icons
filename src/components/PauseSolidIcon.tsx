import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/pause_solid.svg';

const PauseSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { PauseSolidIcon };
