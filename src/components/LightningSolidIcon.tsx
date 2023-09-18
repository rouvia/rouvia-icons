import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/lightning_solid.svg';

const LightningSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { LightningSolidIcon };
