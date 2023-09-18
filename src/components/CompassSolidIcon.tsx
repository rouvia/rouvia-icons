import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/compass_solid.svg';

const CompassSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { CompassSolidIcon };
