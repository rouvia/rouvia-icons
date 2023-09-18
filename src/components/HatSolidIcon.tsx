import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/hat_solid.svg';

const HatSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { HatSolidIcon };
