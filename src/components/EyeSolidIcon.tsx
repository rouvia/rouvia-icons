import React, { SVGProps } from 'react';
import { ReactComponent as Icon } from '../assets/eye_solid.svg';

const EyeSolidIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return <Icon {...props} />;
};

export { EyeSolidIcon };
